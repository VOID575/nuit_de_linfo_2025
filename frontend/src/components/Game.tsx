import {useEffect, useRef, useState, useCallback, useMemo} from 'react';
import * as THREE from 'three';
import { Button } from './ui/button';
import { type Position, type Direction, type Size } from "../types/basicPhysic.ts";
import { useControls } from "../hooks/useControls.ts";
import {Vector3} from "three";

const GRID_SIZE = 20;
const CELL_SIZE = 1;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;



export default function App() {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const snakeMeshesRef = useRef<THREE.Mesh[]>([]);
    const foodMeshRef = useRef<THREE.Mesh | null>(null);
    const gridRef = useRef<THREE.GridHelper | null>(null);

    const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
    const [food, setFood] = useState<Position>({ x: 15, y: 15 });
    const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [screenSize,setScreenSize] = useState<Size>({x:'600px', y:'600px'});
    const [isOnFullScreen,setFullScreen] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const nextDirection = useControls(direction, isPlaying);

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
        setFood({ x: 15, y: 15 });
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
    };

    const onFullScreen = () => {
        if (!isOnFullScreen) {
            setScreenSize({width : '100vw',height : '100vh'})
            setFullScreen(true);
        } else {
            setScreenSize({width : '600px',height : '600px'})
            setFullScreen(false);
        }

        if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        rendererRef.current.setSize(width, height);

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
    };

    useEffect(() => {
            if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;

            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            rendererRef.current.setSize(width, height);

            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();
    }, [screenSize]);

    const checkCollision = (head: Position, body: Position[]) => {
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            return true;
        }
        return body.some((segment) => segment.x === head.x && segment.y === head.y);
    };

    // Initialize Three.js scene
    useEffect(() => {
        if (!mountRef.current) return;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a4d3c);
        scene.fog = new THREE.Fog(0x0a4d3c, 20, 50);
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(
            100,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(GRID_SIZE * 1.5, GRID_SIZE * 2.5, GRID_SIZE * 1.5);
        camera.lookAt(snake[0].x, 0, snake[0].y);
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 10);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.left = -GRID_SIZE;
        directionalLight.shadow.camera.right = GRID_SIZE;
        directionalLight.shadow.camera.top = GRID_SIZE;
        directionalLight.shadow.camera.bottom = -GRID_SIZE;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

        // Grid
        const gridHelper = new THREE.GridHelper(GRID_SIZE, GRID_SIZE, 0x22c55e, 0x166534);
        gridHelper.position.set(GRID_SIZE / 2 - 0.5, -0.01, GRID_SIZE / 2 - 0.5);
        scene.add(gridHelper);
        gridRef.current = gridHelper;

        // Ground plane
        const groundGeometry = new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x0f6b4d,
            roughness: 0.8,
            metalness: 0.2
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.set(GRID_SIZE / 2 - 0.5, -0.02, GRID_SIZE / 2 - 0.5);
        ground.receiveShadow = true;
        scene.add(ground);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (!mountRef.current) return;
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    const snakeHeadRef = useRef(INITIAL_SNAKE[0]);
    const [currentLookPos, setCurrentLook] = useState<Vector3>(new Vector3());
    useEffect(() => {
        snakeHeadRef.current = snake[0];
        if (cameraRef.current && snake.length > 0) {
            const targetLookAt = new Vector3(snakeHeadRef.current.x, 0, snakeHeadRef.current.y);
            currentLookPos.lerp(targetLookAt, 0.05);
            cameraRef.current.lookAt(currentLookPos);
            setCurrentLook(currentLookPos);
        }
    }, [snake]);

    const snakeGeometry = useMemo(() => new THREE.BoxGeometry(CELL_SIZE * 0.9, CELL_SIZE * 0.9, CELL_SIZE * 0.9), []);
    const snakeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: 0x22c55e,
        roughness: 0.5,
        metalness: 0.3,
    }), []);
    const headMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: 0x4ade80,
        roughness: 0.5,
        metalness: 0.3,
    }), []);

    // Update snake and food meshes
    useEffect(() => {
        if (!sceneRef.current) return;

        const scene = sceneRef.current;

        // Remove old snake meshes
        snakeMeshesRef.current.forEach((mesh) => {
            scene.remove(mesh);
            mesh.geometry.dispose();
            (mesh.material as THREE.Material).dispose();
        });
        snakeMeshesRef.current = [];

        // Create new snake meshes
        snake.forEach((segment, index) => {
            const mesh = new THREE.Mesh(snakeGeometry, index === 0 ? headMaterial : snakeMaterial);
            mesh.position.set(segment.x, CELL_SIZE / 2, segment.y);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            scene.add(mesh);
            snakeMeshesRef.current.push(mesh);
        });

        // Update food mesh
        if (foodMeshRef.current) {
            scene.remove(foodMeshRef.current);
            foodMeshRef.current.geometry.dispose();
            (foodMeshRef.current.material as THREE.Material).dispose();
        }

        const foodGeometry = new THREE.SphereGeometry(CELL_SIZE * 0.4, 16, 16);
        const foodMaterial = new THREE.MeshStandardMaterial({
            color: 0xef4444,
            emissive: 0xef4444,
            emissiveIntensity: 0.3,
            roughness: 0.3,
            metalness: 0.5,
        });
        const foodMesh = new THREE.Mesh(foodGeometry, foodMaterial);
        foodMesh.position.set(food.x, CELL_SIZE / 2, food.y);
        foodMesh.castShadow = true;
        scene.add(foodMesh);
        foodMeshRef.current = foodMesh;
    }, [snake, food]);

    // Game loop
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

                if (checkCollision(newHead, prevSnake)) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex items-center justify-center p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div
                    ref={mountRef}
                    className="rounded-xl overflow-hidden shadow-2xl border-4 border-green-500/30"
                    style={{ width: screenSize.width, height: screenSize.height  }}
                />

                <div className="flex flex-col gap-6 items-center">
                    <div className="text-center bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-green-500/30">
                        <div className="text-white/90 text-2xl">
                            Score: <span className="font-mono text-green-400">{score}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-row gap-4">
                            {!isPlaying && !gameOver && (
                                <Button
                                    onClick={resetGame}
                                    size="lg"
                                    className="bg-green-600 hover:bg-green-700 text-lg p-8"
                                >
                                    Commencer
                                </Button>
                            )}
                            <Button
                                onClick={onFullScreen}
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-lg p-8"
                            >
                                Plein écran
                            </Button>
                        </div>

                        {gameOver && (
                            <div className="text-center bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-red-500/30">
                                <div className="text-red-400 text-xl mb-4">Game Over!</div>
                                <Button
                                    onClick={resetGame}
                                    size="lg"
                                    className="bg-green-600 hover:bg-green-700 text-lg px-8"
                                >
                                    Rejouer
                                </Button>
                            </div>
                        )}

                        <div className="text-white/90 text-center bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-green-500/20">
                            {isPlaying && (
                                <>
                                    <div className="mb-2">Utilisez les flèches pour diriger</div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <div className="bg-green-600/50 px-3 py-1 rounded">↑</div>
                                        <div className="bg-green-600/50 px-3 py-1 rounded">↓</div>
                                        <div className="bg-green-600/50 px-3 py-1 rounded">←</div>
                                        <div className="bg-green-600/50 px-3 py-1 rounded">→</div>
                                    </div>
                                </>
                            )}
                            {!isPlaying && !gameOver && (
                                <div>Cliquez sur "Commencer" pour jouer</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
