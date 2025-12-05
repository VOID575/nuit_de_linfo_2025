import { useState, useEffect } from "react";

export default function Level2() {
    const [showGame, setShowGame] = useState(false);
    const [progress, setProgress] = useState(27); // pour coller à ta maquette
    const [developers, setDevelopers] = useState(3);
    const [word, setWord] = useState("pipeline");
    const [userInput, setUserInput] = useState("");
    const [message, setMessage] = useState("");

    const words = ["pipeline", "opensource", "logiciel", "securite", "transparence"];

    // -- DEVELOPPEURS = +1%/sec chacun --
    useEffect(() => {
        if (!showGame) return;

        const interval = setInterval(() => {
            setProgress((p) => Math.min(p + developers * 1, 100)); // +1%/sec/dev
        }, 1000);

        return () => clearInterval(interval);
    }, [developers, showGame]);

    // -- CHOISIT UN NOUVEAU MOT --
    const refreshWord = () => {
        const newWord = words[Math.floor(Math.random() * words.length)];
        setWord(newWord);
    };

    const buyDeveloper = () => {
        if (progress >= 1) {
            setProgress(progress - 1);
            setDevelopers(developers + 1);
        }
    };

    const handleSubmitWord = () => {
        if (userInput.toLowerCase() === word.toLowerCase()) {
            setProgress((p) => Math.min(p + 1, 100)); // mot = +1%
            setMessage("✓ Correct !");
            setUserInput("");
            refreshWord();
        } else {
            setMessage("✗ Incorrect");
        }

        setTimeout(() => setMessage(""), 2000);
    };

    if (!showGame) {
        return (
            <div className="min-h-screen bg-[#0E2A1E] text-white flex flex-col items-center justify-center p-4">
                <div className="max-w-xl text-center">
                    <h1 className="text-4xl font-bold mb-8">Niveau 2 : Open Source</h1>

                    <div className="bg-white/10 p-6 rounded-xl mb-8">
                        <p className="leading-relaxed">
                            Vous êtes un développeur qui vise l’open-source. Les utilisateurs peuvent vérifier votre code afin de s’assurer qu’aucun spyware n’est présent.
                        </p>
                        <p className="leading-relaxed mt-4">
                            Développez, progressez, et engagez d’autres développeurs pour avancer plus vite.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowGame(true)}
                        className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-xl font-bold"
                    >
                        Commencer
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0E2A1E] text-white p-6">
            <div className="max-w-xl mx-auto">

                {/* Progress bar */}
                <div className="mb-6">
                    <div className="h-2 bg-green-900 rounded-full w-full">
                        <div
                            className="h-2 bg-green-400 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-center mt-1">{Math.floor(progress)}%</p>
                </div>

                {/* Developer card (comme ta maquette) */}
                <p className="mb-3 text-center text-sm">
                    Payez 1% de progression pour engager un développeur
                </p>

                <div className="flex justify-center">
                    <div className="flex bg-green-900 rounded-xl overflow-hidden text-center shadow-lg">

                        <div className="bg-green-800 px-4 py-4 font-bold text-sm">
                            Nombre de développeur<br />actuel
                        </div>

                        <div className="bg-green-700 px-6 flex items-center justify-center text-3xl font-bold">
                            {developers}
                        </div>

                        <button
                            onClick={buyDeveloper}
                            disabled={progress < 1}
                            className="bg-green-600 hover:bg-green-500 disabled:bg-gray-600 px-5 text-3xl font-bold"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Word typing section */}
                <div className="mt-10 text-center">
                    <p className="text-sm">Écrivez le mot ci-dessous pour gagner +1%</p>

                    <p className="text-xl text-green-300 underline mt-2">{word}</p>

                    <div className="flex justify-center gap-2 mt-5 mb-4">
                        {word.split("").map((_, i) => (
                            <div key={i} className="w-6 h-6 border-b-2 border-white"></div>
                        ))}
                    </div>

                    <div className="flex gap-2 justify-center">
                        <input
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmitWord()}
                            className="px-3 py-2 rounded text-black"
                        />
                        <button
                            onClick={handleSubmitWord}
                            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded font-bold"
                        >
                            Valider
                        </button>
                    </div>

                    {message && <p className="mt-4 text-lg">{message}</p>}
                </div>
            </div>
        </div>
    );
}