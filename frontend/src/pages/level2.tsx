import { useState, useEffect } from 'react';

'use client';


export default function Level2() {
    const [showGame, setShowGame] = useState(false);
    const [progress, setProgress] = useState(0);
    const [developers, setDevelopers] = useState(0);
    const [word, setWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');

    const words = ['opensource', 'développeur', 'logiciel', 'sécurité', 'code', 'transparence'];

    useEffect(() => {
        if (showGame) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setWord(randomWord);
        }
    }, [showGame]);

    const buyDeveloper = () => {
        if (progress >= 1) {
            setProgress(progress - 1);
            setDevelopers(developers + 1);
        }
    };

    const calculateGain = () => {
        if (developers === 0) return 1;
        return Math.pow(1.5, developers - 1) * 10;
    };

    const handleSubmitWord = () => {
        if (userInput.toLowerCase() === word.toLowerCase()) {
            const gain = calculateGain();
            setProgress(progress + gain);
            setMessage('✓ Correct!');
            setUserInput('');
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setWord(randomWord);
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
                            Vous êtes un développeur qui a pour but de développer en open source. De cette façon si un problème se trouve sur votre logiciel, le problème sera facilement repérable à partir du code et le souci ne sera pas dépendant d'une petite équipe dans une entreprise.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            De cette manière, les utilisateurs sauront qu'aucun spyware se trouve sur votre logiciel.
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6">Niveau 2: Open Source</h1>

                {/* Progress Bar */}
                <div className="mb-6">
                    <p className="text-white text-lg mb-2">Payez 1% de progression pour engager un développeur</p>
                    <div className="w-full bg-gray-300 rounded-full h-6">
                        <div
                            className="bg-green-500 h-6 rounded-full transition-all flex items-center justify-center text-white font-bold text-sm"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                            {Math.floor(progress)}%
                        </div>
                    </div>
                </div>

                {/* Buy Developer Button */}
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
                    <p className="text-white text-lg mb-4">Écrivez le mot ci-dessous pour gagner {calculateGain().toFixed(1)}%</p>
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

export default Level2;