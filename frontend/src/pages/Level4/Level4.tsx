import React, { useState, useEffect, useRef, useCallback } from 'react';
// @ts-ignore
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165/build/three.module.js';

// Define piece types
type PieceType = 'L' | 'J' | 'I' | 'Square' | 'S' | 'T';

interface Piece {
    id: number;
    type: PieceType;
    color: string;
    shape: number[][]; // 2D array representing the shape (1 for block, 0 for empty)
}

// Initial pieces definition
const initialPieces: Piece[] = [
    { id: 1, type: 'L', color: '#800080', shape: [[1, 0], [1, 0], [1, 1]] },
    { id: 2, type: 'J', color: '#800080', shape: [[0, 1], [0, 1], [1, 1]] },
    { id: 3, type: 'I', color: '#0000FF', shape: [[1], [1], [1], [1]] },
    { id: 4, type: 'Square', color: '#FFFF00', shape: [[1, 1], [1, 1]] },
    { id: 5, type: 'S', color: '#45ff25', shape: [[0, 1, 1], [1, 1, 0]] },
    { id: 6, type: 'T', color: '#FFC0CB', shape: [[1, 1, 1], [0, 1, 0]] },
    { id: 7, type: 'T', color: '#FFC0CB', shape: [[1, 1, 1], [0, 1, 0]] },
];

const GRID_ROWS = 7;
const GRID_COLS = 4;

// Interface for a registered 3D view
interface View3D {
    id: number;
    scene: THREE.Scene;
    camera: THREE.Camera;
    element: HTMLElement;
    meshGroup: THREE.Group;
}

// Component to register a piece scene
const Piece3D: React.FC<{ 
    id: number;
    shape: number[][]; 
    color: string; 
    registerView: (view: View3D) => void;
    unregisterView: (id: number) => void;
}> = ({ id, shape, color, registerView, unregisterView }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Create Scene
        const scene = new THREE.Scene();
        // No background, handled by renderer clear

        // Create Camera
        // Aspect ratio will be calculated during render based on element size
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 7;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        // Geometry
        const group = new THREE.Group();
        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const material = new THREE.MeshStandardMaterial({ color: color, roughness: 0.5, metalness: 0.1 });

        let rowCount = shape.length;
        let colCount = shape[0].length;
        let centerX = (colCount - 1) / 2;
        let centerY = (rowCount - 1) / 2;

        shape.forEach((row, r) => {
            row.forEach((cell, c) => {
                if (cell === 1) {
                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.position.set(c - centerX, -(r - centerY), 0);
                    group.add(mesh);
                }
            });
        });

        group.rotation.x = Math.PI / 6;
        group.rotation.y = -Math.PI / 6;
        scene.add(group);

        // Register this view
        registerView({
            id,
            scene,
            camera,
            element: mountRef.current,
            meshGroup: group
        });

        return () => {
            unregisterView(id);
            geometry.dispose();
            material.dispose();
        };
    }, [id, shape, color, registerView, unregisterView]);

    return <div ref={mountRef} style={{ width: '100px', height: '100px' }} />;
};

const Level4: React.FC = () => {
    // Grid state
    const [grid, setGrid] = useState<number[][]>(
        Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(0))
    );
    
    const [pieces, setPieces] = useState<Piece[]>(JSON.parse(JSON.stringify(initialPieces)));
    const [placedPieces, setPlacedPieces] = useState<{ [key: number]: boolean }>({});

    // Check victory condition: all cells are filled (non-zero)
    const isVictory = grid.every(row => row.every(cell => cell !== 0));

    // --- 3D Rendering System ---
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const viewsRef = useRef<View3D[]>([]);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    const registerView = useCallback((view: View3D) => {
        viewsRef.current = [...viewsRef.current.filter(v => v.id !== view.id), view];
    }, []);

    const unregisterView = useCallback((id: number) => {
        viewsRef.current = viewsRef.current.filter(v => v.id !== id);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Initialize Single Renderer
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setScissorTest(true);
        renderer.setClearColor(0x000000, 0); // Ensure transparent clear
        rendererRef.current = renderer;

        let animationId: number;

        const render = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Resize renderer if window resizes
            if (canvas.width !== width || canvas.height !== height) {
                renderer.setSize(width, height, false);
            }

            // Clear the whole canvas
            renderer.setScissor(0, 0, width, height);
            renderer.setViewport(0, 0, width, height);
            renderer.clear();

            // Render each view
            viewsRef.current.forEach(view => {
                const { scene, camera, element, meshGroup } = view;
                
                // Get element position relative to viewport
                const rect = element.getBoundingClientRect();

                // Check if offscreen
                if (rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) {
                    return;
                }

                // Calculate viewport parameters
                // WebGL 0,0 is bottom-left, DOM 0,0 is top-left
                const viewLeft = rect.left;
                const viewBottom = height - rect.bottom;
                const viewWidth = rect.width;
                const viewHeight = rect.height;

                renderer.setViewport(viewLeft, viewBottom, viewWidth, viewHeight);
                renderer.setScissor(viewLeft, viewBottom, viewWidth, viewHeight);

                // Update camera aspect
                if (camera instanceof THREE.PerspectiveCamera) {
                    camera.aspect = viewWidth / viewHeight;
                    camera.updateProjectionMatrix();
                }

                // Animate
                meshGroup.rotation.y += 0.01;

                renderer.render(scene, camera);
            });

            animationId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            if (canvasRef.current) {
                const w = window.innerWidth;
                const h = window.innerHeight;
                renderer.setSize(w, h);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);
    // ---------------------------

    const rotatePiece = (id: number) => {
        setPieces(prevPieces => prevPieces.map(p => {
            if (p.id === id) {
                const matrix = p.shape;
                const rows = matrix.length;
                const cols = matrix[0].length;
                const newMatrix = Array(cols).fill(null).map(() => Array(rows).fill(0));
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        newMatrix[c][rows - 1 - r] = matrix[r][c];
                    }
                }
                return { ...p, shape: newMatrix };
            }
            return p;
        }));
    };

    const handleDragStart = (e: React.DragEvent, piece: Piece) => {
        e.dataTransfer.setData('pieceId', piece.id.toString());
        e.dataTransfer.setData('pieceShape', JSON.stringify(piece.shape));
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent, row: number, col: number) => {
        e.preventDefault();
        const pieceId = parseInt(e.dataTransfer.getData('pieceId'));
        const shape = JSON.parse(e.dataTransfer.getData('pieceShape')) as number[][];
        
        if (canPlacePiece(grid, shape, row, col)) {
            placePiece(pieceId, shape, row, col);
        }
    };

    const canPlacePiece = (currentGrid: number[][], shape: number[][], startRow: number, startCol: number) => {
        for (let r = 0; r < shape.length; r++) {
            for (let c = 0; c < shape[r].length; c++) {
                if (shape[r][c] === 1) {
                    const gridRow = startRow + r;
                    const gridCol = startCol + c;
                    if (gridRow >= GRID_ROWS || gridCol >= GRID_COLS || gridRow < 0 || gridCol < 0) return false;
                    if (currentGrid[gridRow][gridCol] !== 0) return false;
                }
            }
        }
        return true;
    };

    const placePiece = (id: number, shape: number[][], startRow: number, startCol: number) => {
        const newGrid = grid.map(row => [...row]);
        for (let r = 0; r < shape.length; r++) {
            for (let c = 0; c < shape[r].length; c++) {
                if (shape[r][c] === 1) {
                    newGrid[startRow + r][startCol + c] = id;
                }
            }
        }
        setGrid(newGrid);
        setPlacedPieces(prev => ({ ...prev, [id]: true }));
    };

    const resetLevel = () => {
        setGrid(Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(0)));
        setPlacedPieces({});
        setPieces(JSON.parse(JSON.stringify(initialPieces)));
    };

    const getPieceColor = (id: number) => {
        const piece = pieces.find(p => p.id === id);
        return piece ? piece.color : 'transparent';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', color: 'white', position: 'relative', minHeight: '100vh' }}>
            {/* Victory Overlay */}
            {isVictory && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backdropFilter: 'blur(5px)'
                }}>
                    <h1 style={{ fontSize: '2rem', color: '#45ff25', marginBottom: '20px', textShadow: '0 0 20px #45ff25' }}>Bravo ! Vous avez trouvé toutes les solutions du NIRD à partir de toutes ces catégories distincts . !</h1>
                    <p style={{ fontSize: '1rem', marginBottom: '30px' }}>Sachez que le NIRD implique des enjeux géopolitique puisque tout les pays restent dépendants à plusieurs technologies situé au Etats-unis tels que les OS, les clouds, les IA, les Réseaux sociaux. <br/>

                    La notion d’indépendance n’est pas qu’informatique.En effet, si les banques d’aujourd’hui arrêtent de fonctionner se sera toutes l’économie qui sera mise en danger <br/>

                    Merci, d’avoir explorer notre site <br/>

                    (Peut-être reste-t-il quelques jeux cachés  👀​)</p>
                    <button 
                        onClick={resetLevel}
                        style={{
                            padding: '15px 40px',
                            fontSize: '1.2rem',
                            backgroundColor: 'white',
                            color: 'black',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 0 15px rgba(255,255,255,0.5)'
                        }}
                    >
                        Rejouer
                    </button>
                </div>
            )}

            {/* Shared Canvas for all 3D pieces */}
            <canvas 
                ref={canvasRef} 
                style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    pointerEvents: 'none', 
                    zIndex: 50 
                }} 
            />

            <h1>Level 4: Remonter ce téléphone</h1>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>Clic droit sur une pièce pour la tourner</p>
            <button onClick={resetLevel} style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer', zIndex: 20, color: 'white' }}>Reset</button>

            <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', zIndex: 20 }}>
                {/* The Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: `repeat(${GRID_COLS}, 50px)`, 
                    gridTemplateRows: `repeat(${GRID_ROWS}, 50px)`,
                    gap: '2px',
                    border: '2px solid white',
                    backgroundColor: '#222'
                }}>
                    {grid.map((row, rowIndex) => (
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: cell !== 0 ? getPieceColor(cell) : 'transparent',
                                    border: '1px solid #444'
                                }}
                            />
                        ))
                    ))}
                </div>

                {/* The Pieces Bank */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3>Pièces disponibles</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '300px' }}>
                        {pieces.map(piece => (
                            !placedPieces[piece.id] && (
                                <div
                                    key={piece.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, piece)}
                                    onContextMenu={(e) => {
                                        e.preventDefault();
                                        rotatePiece(piece.id);
                                    }}
                                    style={{ cursor: 'grab', border: '1px solid #555', borderRadius: '8px', padding: '5px', backgroundColor: '#333' }}
                                >
                                    <Piece3D 
                                        id={piece.id}
                                        shape={piece.shape} 
                                        color={piece.color} 
                                        registerView={registerView}
                                        unregisterView={unregisterView}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Level4;
