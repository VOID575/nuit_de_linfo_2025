import React, { useState } from 'react';
import './FillInTheBlanks.css';

interface Word {
  id: string;
  text: string;
}

// interface Blank removed as it was unused

const INITIAL_WORDS: Word[] = [
  { id: 'w1', text: 'appareils' },
  { id: 'w2', text: 'standard' },
  { id: 'w3', text: 'USB-C' },
  { id: 'w4', text: 'câble' },
  { id: 'w5', text: 'incompatible' },
  { id: 'w6', text: 'transporter' },
  { id: 'w7', text: 'norme' },
  { id: 'w8', text: 'formats' },
  { id: 'w9', text: 'choix' },
];

const CORRECT_MAPPING: { [key: number]: string } = {
  0: 'appareils',
  1: 'standard',
  2: 'USB-C',
  3: 'câble',
  4: 'incompatible',
  5: 'transporter',
  6: 'formats',
  7: 'norme',
  8: 'choix',
};

const FillInTheBlanks: React.FC = () => {
  const [words, setWords] = useState<Word[]>(INITIAL_WORDS);
  const [placedWords, setPlacedWords] = useState<{ [key: number]: Word | null }>({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  });
  const [isWin, setIsWin] = useState(false);

  // Check for win condition whenever placedWords changes
  React.useEffect(() => {
    const checkWin = () => {
      for (let i = 0; i < 9; i++) {
        if (!placedWords[i] || placedWords[i]?.text !== CORRECT_MAPPING[i]) {
          return false;
        }
      }
      return true;
    };
    setIsWin(checkWin());
  }, [placedWords]);

  const handleDragStart = (e: React.DragEvent, word: Word, source: 'bank' | 'blank', blankId?: number) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ word, source, blankId }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetBlankId: number) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (!data) return;

    const { word, source, blankId: sourceBlankId } = JSON.parse(data) as { word: Word, source: 'bank' | 'blank', blankId?: number };

    // If there is already a word in the target blank, move it back to bank or swap?
    // For simplicity: if target is occupied, swap or return to bank. 
    // Let's just return the existing word to bank for now.
    
    const existingWord = placedWords[targetBlankId];
    
    setPlacedWords(prev => {
      const newPlaced = { ...prev };
      
      // If moving from another blank, clear that blank
      if (source === 'blank' && sourceBlankId !== undefined) {
        newPlaced[sourceBlankId] = null;
      }

      // Place the new word
      newPlaced[targetBlankId] = word;
      return newPlaced;
    });

    setWords(prev => {
      let newWords = [...prev];
      // If coming from bank, remove from bank
      if (source === 'bank') {
        newWords = newWords.filter(w => w.id !== word.id);
      }
      
      // If there was an existing word in the target, add it back to bank
      if (existingWord) {
        newWords.push(existingWord);
      }
      
      return newWords;
    });
  };

  const handleDropToBank = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (!data) return;

    const { word, source, blankId } = JSON.parse(data) as { word: Word, source: 'bank' | 'blank', blankId?: number };

    if (source === 'blank' && blankId !== undefined) {
      setPlacedWords(prev => ({
        ...prev,
        [blankId]: null
      }));
      setWords(prev => [...prev, word]);
    }
  };

  const handleWordClick = (word: Word, blankId: number) => {
    setPlacedWords(prev => ({
      ...prev,
      [blankId]: null
    }));
    setWords(prev => [...prev, word]);
  };

  const handleReset = () => {
    setWords(INITIAL_WORDS);
    setPlacedWords({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
    });
    setIsWin(false);
  };

  const handleCorrection = () => {
    const newPlacedWords: { [key: number]: Word | null } = {};
    const usedWordIds = new Set<string>();

    // Fill blanks with correct words
    for (let i = 0; i < 9; i++) {
      const correctText = CORRECT_MAPPING[i];
      // Find the word object from INITIAL_WORDS
      const wordObj = INITIAL_WORDS.find(w => w.text === correctText);
      if (wordObj) {
        newPlacedWords[i] = wordObj;
        usedWordIds.add(wordObj.id);
      }
    }

    setPlacedWords(newPlacedWords);
    setWords([]); // Empty the bank
  };

  const renderBlank = (id: number) => {
    const word = placedWords[id];
    return (
      <span
        className={`blank-drop-zone ${word ? 'filled' : ''}`}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, id)}
      >
        {word ? (
          <span
            className="draggable-word"
            draggable
            onDragStart={(e) => handleDragStart(e, word, 'blank', id)}
            onClick={() => handleWordClick(word, id)}
            style={{ cursor: 'pointer' }}
            title="Cliquer pour remettre dans la banque"
          >
            {word.text}
          </span>
        ) : (
          <span className="placeholder"></span>
        )}
      </span>
    );
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <p>Une entreprise ayant le monopole dans le monde de la technologie tente de détruire des documents afin de garder le contrôle, reconstituer le document initiale.</p>
        <button className="reset-button" onClick={handleReset}>Réinitialiser</button>
      </div>

      <div className="word-bank" onDragOver={handleDragOver} onDrop={handleDropToBank}>
        <h3>Mots disponibles</h3>
        <div className="words-list">
          {words.map(word => (
            <div
              key={word.id}
              className="draggable-word"
              draggable
              onDragStart={(e) => handleDragStart(e, word, 'bank')}
            >
              {word.text}
            </div>
          ))}
        </div>
      </div>

      <div className="text-board">
        <p>
          Pendant longtemps, certains {renderBlank(0)} utilisaient encore des chargeurs différents du {renderBlank(1)} {renderBlank(2)}, 
          ce qui compliquait la vie de beaucoup d'utilisateurs. Au lieu de pouvoir utiliser un seul {renderBlank(3)} pour plusieurs appareils, 
          il fallait garder un chargeur spécifique, souvent {renderBlank(4)} avec le reste du matériel du quotidien. 
          Cela obligeait à {renderBlank(5)} plus d'accessoires, à racheter des câbles en cas de perte et à gérer des {renderBlank(6)} différents selon les appareils. 
          Alors que l'USB-C devenait la {renderBlank(7)} presque partout, ce {renderBlank(8)} créa de plus en plus de conflit économique et écologique.
        </p>
      </div>

      {isWin && (
        <div className="win-message">
          <button className="continue-button">Passez à l'épreuve suivante</button>
        </div>
      )}

      <button className="correction-button" onClick={handleCorrection}>Correction</button>
    </div>
  );
};

export default FillInTheBlanks;
