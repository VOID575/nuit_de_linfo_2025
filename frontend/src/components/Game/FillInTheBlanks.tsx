import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FillInTheBlanks.css';

interface Word {
    id: string;
    text: string;
}

interface Slot {
    id: number;
    expected: string;
}

const INITIAL_WORDS: Word[] = [
    { id: 'w1', text: 'appareils' },
    { id: 'w2', text: 'standard' },
    { id: 'w3', text: 'USB-C' },
    { id: 'w4', text: 'cable' },
    { id: 'w5', text: 'incompatible' },
    { id: 'w6', text: 'transporter' },
    { id: 'w7', text: 'norme' },
    { id: 'w8', text: 'formats' },
    { id: 'w9', text: 'choix' },
];

const FINAL_SLOTS: Slot[] = [
    { id: 1, expected: 'standard' },
    { id: 2, expected: 'USB-C' },
    { id: 3, expected: 'cable' },
    { id: 4, expected: 'incompatible' },
    { id: 5, expected: 'transporter' },
    { id: 6, expected: 'formats' }, // I'll stick with formats here just to match the list count, but it's shaky.
    { id: 7, expected: 'appareils' }, // "gérer des appareils différents"
    { id: 8, expected: 'choix' },
    { id: 9, expected: 'norme' },
];
// Actually, let's look at the list again. "norme" is unused in my mapping.
// "Alors que l’USB-C devenait la norme presque partout" -> "norme" is in the text.
// Is "norme" a distractor?
// Or is "standard" a distractor?
// "différents du [norme] [USB-C]"? No.
// "différents du [standard] [USB-C]" -> Yes.

// Maybe "gérer des [norme] différents"? No, plural.
// Maybe "racheter des [norme]"? No.

// I will implement with the mapping I have.

const FillInTheBlanks: React.FC = () => {
    const navigate = useNavigate();
    const [placements, setPlacements] = useState<{ [key: number]: string }>({});
    const [isChecked, setIsChecked] = useState(false);

    const handleDragStart = (e: React.DragEvent, wordId: string) => {
        e.dataTransfer.setData('text/plain', wordId);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, slotId: number) => {
        e.preventDefault();
        const wordId = e.dataTransfer.getData('text/plain');
        
        // Remove word from other slots if it was already placed
        const newPlacements = { ...placements };
        Object.keys(newPlacements).forEach(key => {
            if (newPlacements[parseInt(key)] === wordId) {
                delete newPlacements[parseInt(key)];
            }
        });

        newPlacements[slotId] = wordId;
        setPlacements(newPlacements);
        setIsChecked(false);
    };

    const handleWordBankDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const wordId = e.dataTransfer.getData('text/plain');
        
        // Remove word from slots
        const newPlacements = { ...placements };
        Object.keys(newPlacements).forEach(key => {
            if (newPlacements[parseInt(key)] === wordId) {
                delete newPlacements[parseInt(key)];
            }
        });
        setPlacements(newPlacements);
        setIsChecked(false);
    };

    const checkAnswers = () => {
        setIsChecked(true);
    };

    const showCorrection = () => {
        const correctPlacements: { [key: number]: string } = {};
        FINAL_SLOTS.forEach(slot => {
            const word = INITIAL_WORDS.find(w => w.text === slot.expected);
            if (word) {
                correctPlacements[slot.id] = word.id;
            }
        });
        setPlacements(correctPlacements);
        setIsChecked(true);
    };

    const resetGame = () => {
        setPlacements({});
        setIsChecked(false);
    };

    const getWordById = (id: string) => INITIAL_WORDS.find(w => w.id === id);

    const isCorrect = (slotId: number) => {
        const wordId = placements[slotId];
        if (!wordId) return false;
        const word = getWordById(wordId);
        const slot = FINAL_SLOTS.find(s => s.id === slotId);
        // Allow swapping "appareils" and "formats" if user wants, or just strict?
        // Let's be strict but maybe I should double check the logic.
        // "racheter des [formats]" vs "racheter des [appareils]"
        // "gérer des [formats]" vs "gérer des [appareils]"
        // I'll accept both for both slots if they are the only ambiguous ones.
        if (slotId === 6 || slotId === 7) {
             return (word?.text === 'formats' || word?.text === 'appareils');
        }
        return word?.text === slot?.expected;
    };

    const allCorrect = FINAL_SLOTS.every(s => isCorrect(s.id));

    return (
        <div className="fill-game-container">
            <div className="game-description">
                Une entreprise ayant le monopole dans le monde de la technologie tente de détruire des documents afin de garder le contrôle, reconstituer le document initial.
            </div>

            <div 
                className="word-bank"
                onDragOver={handleDragOver}
                onDrop={handleWordBankDrop}
            >
                {INITIAL_WORDS.map(word => {
                    const isPlaced = Object.values(placements).includes(word.id);
                    if (isPlaced) return null; // Hide from bank if placed
                    return (
                        <div
                            key={word.id}
                            className="draggable-word"
                            draggable
                            onDragStart={(e) => handleDragStart(e, word.id)}
                        >
                            {word.text}
                        </div>
                    );
                })}
            </div>

            <div className="text-board">
                Pendant longtemps, certains appareils utilisaient encore des chargeurs différents du 
                <Slot 
                    id={1} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(1)} 
                />
                <Slot 
                    id={2} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(2)} 
                />
                , ce qui compliquait la vie de beaucoup d’utilisateurs. Au lieu de pouvoir utiliser un seul 
                <Slot 
                    id={3} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(3)} 
                />
                pour plusieurs appareils, il fallait garder un chargeur spécifique, souvent 
                <Slot 
                    id={4} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(4)} 
                />
                avec le reste du matériel du quotidien. Cela obligeait à 
                <Slot 
                    id={5} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(5)} 
                />
                plus d’accessoires, à racheter des 
                <Slot 
                    id={6} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(6)} 
                />
                en cas de perte et à gérer des 
                <Slot 
                    id={7} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(7)} 
                />
                différents selon les appareils. Alors que l’USB-C devenait la 
                <Slot 
                    id={9} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(9)} 
                />
                presque partout, ce 
                <Slot 
                    id={8} 
                    placements={placements} 
                    onDrop={handleDrop} 
                    onDragStart={handleDragStart}
                    isChecked={isChecked} 
                    isCorrect={isCorrect(8)} 
                />
                créa de plus en plus de conflit économique et écologique .
            </div>

            <button className="verify-button" onClick={checkAnswers}>
                Vérifier
            </button>

            <div className="correction-container">
                <button className="reset-button" onClick={resetGame}>
                    Réinitialiser
                </button>
                <button className="correction-button" onClick={showCorrection}>
                    Correction
                </button>
            </div>

            {isChecked && allCorrect && (
                <div className="success-message">
                    Bravo ! Document reconstitué.
                    <button className="next-level-button" onClick={() => navigate('/explorer')}>
                        Niveau Suivant
                    </button>
                </div>
            )}
        </div>
    );
};

const Slot: React.FC<{
    id: number;
    placements: { [key: number]: string };
    onDrop: (e: React.DragEvent, slotId: number) => void;
    onDragStart: (e: React.DragEvent, wordId: string) => void;
    isChecked: boolean;
    isCorrect: boolean;
}> = ({ id, placements, onDrop, onDragStart, isChecked, isCorrect }) => {
    const wordId = placements[id];
    const word = INITIAL_WORDS.find(w => w.id === wordId);

    let className = "droppable-slot";
    if (word) className += " filled";
    if (isChecked) {
        className += isCorrect ? " correct" : " incorrect";
    }

    return (
        <span
            className={className}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, id)}
        >
            {word ? (
                <div 
                    className="draggable-word placed"
                    draggable
                    onDragStart={(e) => onDragStart(e, word.id)}
                >
                    {word.text}
                </div>
            ) : null}
        </span>
    );
};

export default FillInTheBlanks;
