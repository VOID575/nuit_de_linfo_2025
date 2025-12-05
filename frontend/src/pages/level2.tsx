import { useState, useEffect } from 'react';

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
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [developers, gameFinished]);

    const pickRandomWord = () => {
        if (!words || words.length === 0) return setWord('');
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
    };

    const buyDeveloper = () => {
        if (progress >= 1 && !gameFinished) {
            setProgress(prev => Math.max(prev - 1, 0));
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
            <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col items-center justify-center p-4">
                <div className="max-w-2xl text-white text-center">
                    <h1 className="text-4xl font-bold mb-8">Niveau 2: Open Source</h1>
                    <div className="bg-white/10 backdrop-blur p-8 rounded-lg mb-8">
                        <p className="text-lg leading-relaxed">
                            Vous êtes un développeur qui a pour but de développer en open source...
                        </p>
                    </div>
                    <button
                        onClick={() => setShowGame(true)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl"
                    >
                        Commencer le jeu
                    </button>
                </div>
            </div>
        );
    }

    if (gameFinished) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col items-center justify-center p-8 text-white">
                <h1 className="text-4xl font-bold mb-6 text-center">Bravo, vous avez fini le développement de votre logiciel !</h1>
                <p className="text-lg leading-relaxed mb-4">
                    Grâce à l’aide communautaire que les utilisateurs vous ont apportés, des milliers d’entreprises auront accès à des logiciels open-sources.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Cela leur permettra de rester indépendant technologiquement.
                </p>
                <p className="text-lg leading-relaxed">
                    Par conséquent, ces entreprises n’auront pas à changer de logiciel ce qui n’occasionnera pas des coûts économique et écologique.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6">Niveau 2: Open Source</h1>

                {/* Progress Bar */}
                <div className="mb-6">
                    <p className="text-white text-lg mb-2">Engagez un développeur pour 1%.</p>
                    <div className="w-full bg-gray-300 rounded-full h-6">
                        <div
                            className="bg-green-500 h-6 rounded-full transition-all flex items-center justify-center text-white font-bold text-sm"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                            {Math.floor(progress)}%
                        </div>
                    </div>
                </div>

                {/* Buy Developer */}
                <div className="mb-6 flex items-center gap-2">
                    <button
                        onClick={buyDeveloper}
                        disabled={progress < 1}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Développeurs: {developers}
                    </button>
                    <button
                        onClick={buyDeveloper}
                        disabled={progress < 1}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded text-lg"
                    >
                        +
                    </button>
                </div>

                {/* Word Game */}
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                    <p className="text-white text-lg mb-4">Écrivez le mot ci-dessous pour gagner 1%</p>
                    <p className="text-3xl font-bold text-yellow-300 text-center mb-6">{word}</p>
                    <div className="flex justify-center gap-2 mb-6">
                        {word.split('').map((_, idx) => (
                            <div key={idx} className="w-8 h-8 border-b-2 border-white"></div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmitWord()}
                            placeholder="Votre réponse"
                            className="flex-1 px-4 py-2 rounded"
                        />
                        <button
                            onClick={handleSubmitWord}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
                        >
                            Valider
                        </button>
                    </div>
                    {message && <p className="text-white text-center mt-4 text-lg">{message}</p>}
                </div>
            </div>
        </div>
    );
}
