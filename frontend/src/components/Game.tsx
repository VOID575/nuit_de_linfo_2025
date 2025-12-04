import { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

type Position = { x: number; y: number };
type Direction = { x: number; y: number };

export default function Game() {
    const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
    const [food, setFood] = useState<Position>({ x: 15, y: 15 });
    const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
    const [nextDirection, setNextDirection] = useState<Direction>(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const generateFood = useCallback((currentSnake: Position[]) => {
        let newFood: Position;
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (
            currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
            );
        return newFood;
    }, []);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setNextDirection(INITIAL_DIRECTION);
        setFood({ x: 15, y: 15 });
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
    };

    const checkCollision = (head: Position, body: Position[]) => {
        // Check wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            return true;
        }
        // Check self collision
        return body.some((segment) => segment.x === head.x && segment.y === head.y);
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isPlaying || gameOver) return;

            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y === 0) setNextDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y === 0) setNextDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x === 0) setNextDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x === 0) setNextDirection({ x: 1, y: 0 });
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [direction, isPlaying, gameOver]);

    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const gameLoop = setInterval(() => {
            setDirection(nextDirection);

            setSnake((prevSnake) => {
                const head = prevSnake[0];
                const newHead = {
                    x: head.x + nextDirection.x,
                    y: head.y + nextDirection.y,
                };

                // Check collision
                if (checkCollision(newHead, prevSnake)) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

                // Check if food is eaten
                if (newHead.x === food.x && newHead.y === food.y) {
                    setScore((prev) => prev + 10);
                    setFood(generateFood(newSnake));
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        }, GAME_SPEED);

        return () => clearInterval(gameLoop);
    }, [isPlaying, gameOver, nextDirection, food, generateFood]);

    const isCellSnake = (x: number, y: number) => {
        return snake.some((segment) => segment.x === x && segment.y === y);
    };

    const isCellFood = (x: number, y: number) => {
        return food.x === x && food.y === y;
    };

    const isCellHead = (x: number, y: number) => {
        return snake[0]?.x === x && snake[0]?.y === y;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                    <h1 className="text-white mb-2">Jeu Snake</h1>
                    <div className="text-white/90">
                        Score: <span className="font-mono">{score}</span>
                    </div>
                </div>

                <div
                    className="bg-black/30 p-4 rounded-lg shadow-2xl"
                    style={{
                        width: GRID_SIZE * CELL_SIZE + 32,
                    }}
                >
                    <div
                        className="bg-green-950/50 border-2 border-green-500/30"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                            gap: '1px',
                        }}
                    >
                        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                            const x = index % GRID_SIZE;
                            const y = Math.floor(index / GRID_SIZE);
                            const isSnake = isCellSnake(x, y);
                            const isFood = isCellFood(x, y);
                            const isHead = isCellHead(x, y);

                            return (
                                <div
                                    key={index}
                                    className={`
                    ${isHead ? 'bg-green-400 rounded-sm' : ''}
                    ${isSnake && !isHead ? 'bg-green-500 rounded-sm' : ''}
                    ${isFood ? 'bg-red-500 rounded-full' : ''}
                    ${!isSnake && !isFood ? 'bg-green-950/20' : ''}
                  `}
                                    style={{
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    {!isPlaying && !gameOver && (
                        <Button
                            onClick={resetGame}
                            size="lg"
                            className="bg-green-600 hover:bg-green-700"
                        >
                            Commencer
                        </Button>
                    )}

                    {gameOver && (
                        <div className="text-center">
                            <div className="text-red-400 mb-3">Game Over!</div>
                            <Button
                                onClick={resetGame}
                                size="lg"
                                className="bg-green-600 hover:bg-green-700"
                            >
                                Rejouer
                            </Button>
                        </div>
                    )}

                    <div className="text-white/70 text-center text-sm">
                        {isPlaying && (
                            <>
                                <div>Utilisez les flèches pour diriger le serpent</div>
                                <div className="mt-1">↑ ↓ ← →</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
