import {useEffect, useState} from "react";
import { type Direction } from  "../types/basicPhysic.ts"

export function useControls(currentDirection: Direction, isPlaying: boolean) {
    const [nextDirection, setNextDirection] = useState<Direction>(currentDirection);
    useEffect(() => {
        const handleKeyPress = (keyboardEvent: KeyboardEvent) => {
            if (!isPlaying) return;

            switch (keyboardEvent.key) {
                case 'ArrowUp':
                    if (currentDirection.y === 0) setNextDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (currentDirection.y === 0) setNextDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (currentDirection.x === 0) setNextDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (currentDirection.x === 0) setNextDirection({ x: 1, y: 0 });
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            // Listen the next keyPress before cleaning and running the hook again
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [currentDirection]);

    return nextDirection;
}