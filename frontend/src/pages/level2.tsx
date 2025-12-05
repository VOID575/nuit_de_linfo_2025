import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Level2.css';

'use client';

export default function Level2() {
    const [showGame, setShowGame] = useState(false);
    const [progress, setProgress] = useState(0);
    const [developers, setDevelopers] = useState(0);
    const [word, setWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');
    const [gameFinished, setGameFinished] = useState(false);

    const words = ['opensource', 'développeur', 'logiciel', 'sécurité', 'code', 'transparence', 'collaboration', 'communauté', 'innovation', 'partage', 'contribution', 'liberté', 'éthique', 'audit', 'licence', 'modularité', 'interopérabilité', 'accessibilité', 'soutenabilité', 'évolution', 'documentation', 'testabilité', 'maintenabilité', 'adaptabilité', 'performance', 'scalabilité', 'fiabilité', 'flexibilité', 'extensibilité', 'intégration', 'automatisation', 'déploiement'];

    useEffect(() => {
        if (showGame && !gameFinished) {
            pickRandomWord();
        }
    }, [showGame, gameFinished]);

    useEffect(() => {
        if (developers > 0 && !gameFinished) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = Math.min(prev + developers * 1, 100);
                    if (newProgress >= 100) setGameFinished(true);
                    return newProgress;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [developers, gameFinished]);

    const pickRandomWord = () => {
        if (!words || words.length === 0) return setWord('');
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
    };

    const buyDeveloper = () => {
        if (progress >= 10+5*developers) {
            setProgress(prev => Math.max(prev - (10+5*developers), 0));
            setDevelopers(prev => prev + 1);
        }
    };

    const calculateGain = () => {
        return 1;
    };

    const handleSubmitWord = () => {
        if (!word || gameFinished) return;
        if (userInput.trim().toLowerCase() === word.toLowerCase()) {
            const gain = calculateGain();
            setProgress(prev => {
                const newProgress = Math.min(prev + gain, 100);
                if (newProgress >= 100) setGameFinished(true);
                return newProgress;
            });
            setMessage('✓ Correct!');
            setUserInput('');
            pickRandomWord();
        } else {
            setMessage('✗ Incorrect, réessayez!');
        }
        setTimeout(() => setMessage(''), 2000);
    };

    if (!showGame) {
        return (
            <div className="level2-container">
                <div className="level2-content">
                    <h1 className="level2-title">Niveau 2: Open Source</h1>
                    <div className="level2-text-box">
                        <p className="level2-text">
                            Vous êtes un developpeur qui a pour but de développer en open source. <br/>
                            De cette façon si un problème se trouve sur votre logiciel, le problème sera facilement repérable à partir du code et le soucis ne sera pas dépend d’une petite équipe dans une entreprise.<br/>
                            <br/>
                            De cette manière, les utilisateurs sauront qu’aucun spyware se trouve sur votre logiciel. 
                        </p>
                    </div>
                    <button
                        onClick={() => setShowGame(true)}
                        className="level2-button"
                    >
                        Commencer le jeu
                    </button>
                </div>
            </div>
        );
    }

    if (gameFinished) {
        return (
            <div className="level2-container">
                <div className="level2-content">
                    <h1 className="level2-title">Bravo, vous avez fini le développement de votre logiciel !</h1>
                    <p className="level2-text">
                        Grâce à l’aide communautaire que les utilisateurs vous ont apportés, des milliers d’entreprises auront accès à des logiciels open-sources.
                    </p>
                    <p className="level2-text">
                        Cela leur permettra de rester indépendant technologiquement.
                    </p>
                    <p className="level2-text">
                        Par conséquent, ces entreprises n’auront pas à changer de logiciel ce qui n’occasionnera pas des coûts économique et écologique.
                    </p>
                    <NavLink to="/level3intro" className="level2-button" style={{display: 'inline-block', marginTop: '1rem', textDecoration: 'none'}}>
                        Niveau Suivant
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="level2-container">
            <div className="level2-game-container">
                <h1 className="level2-title">Niveau 2: Open Source</h1>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <p className="level2-text" style={{marginBottom: '0.5rem'}}>Engagez un développeur pour {10+5*developers}%.</p>
                    <div className="progress-bar-bg">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                            {Math.floor(progress)}%
                        </div>
                    </div>
                </div>

                {/* Buy Developer */}
                <div className="developer-controls">
                    <button
                        onClick={buyDeveloper}
                        disabled={progress < 1}
                        className="dev-button"
                    >
                        Développeurs: {developers}
                    </button>
                    <button
                        onClick={buyDeveloper}
                        disabled={progress < 1}
                        className="dev-button"
                    >
                        +
                    </button>
                </div>

                {/* Word Game */}
                <div className="word-game-area">
                    <p className="level2-text" style={{marginBottom: '1rem'}}>Écrivez le mot ci-dessous pour gagner 1%</p>
                    <p className="target-word">{word}</p>
                    <div className="word-input-group">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmitWord()}
                            placeholder="Votre réponse"
                            className="word-input"
                        />
                        <button
                            onClick={handleSubmitWord}
                            className="validate-button"
                        >
                            Valider
                        </button>
                    </div>
                    {message && <p className="feedback-message">{message}</p>}
                </div>
            </div>
        </div>
    );
}
