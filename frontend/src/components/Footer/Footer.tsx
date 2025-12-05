import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

export default function Footer() {
    const [progress, setProgress] = useState(0);
    const [heat, setHeat] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    
    const handleRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const rigRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);
    const mouthRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLElement>(null);
    const toastGroupRef = useRef<HTMLDivElement>(null);

    const pumpAction = () => {
        if (isComplete) return;

        if (handleRef.current) {
            handleRef.current.style.top = '100px';
        }

        setProgress(prev => prev + 8);
        setHeat(prev => Math.min(prev + 18, 99));

        createSmoke();

        if (rigRef.current) {
            rigRef.current.classList.remove('shaking');
            void rigRef.current.offsetWidth;
            rigRef.current.classList.add('shaking');
            setTimeout(() => {
                if (!isComplete && rigRef.current) {
                    rigRef.current.classList.remove('shaking');
                }
            }, 150);
        }

        if (progress + 8 >= 100) {
            winGame();
        }
    };

    const handleMouseUp = () => {
        if (handleRef.current) {
            handleRef.current.style.top = '0px';
        }
    };

    const updateVisuals = () => {
        // Barre de progression
        if (barRef.current) {
            barRef.current.style.width = Math.min(progress, 100) + '%';
        }

        // Couleur du grille-pain
        if (bodyRef.current) {
            const ratio = heat / 100;
            const startR = 189, startG = 195, startB = 199;
            const endR = 255, endG = 60, endB = 60;

            const r = Math.floor(startR + (endR - startR) * ratio);
            const g = Math.floor(startG + (endG - startG) * ratio);
            const b = Math.floor(startB + (endB - startB) * ratio);

            bodyRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }

        // Visage et statut
        if (statusRef.current && mouthRef.current) {
            if (heat < 30) {
                statusRef.current.innerText = "Allez !";
                mouthRef.current.style.height = "5px";
                mouthRef.current.style.borderRadius = "2px";
            } else if (heat < 70) {
                statusRef.current.innerText = "Plus Vite !";
                mouthRef.current.style.height = "20px";
                mouthRef.current.style.borderRadius = "50%";
            } else {
                statusRef.current.innerText = "EXPLOSION !!!";
                statusRef.current.style.transform = "scale(1.2)";
                mouthRef.current.style.height = "10px";
                mouthRef.current.style.width = "60px";
            }
        }

        // Position des tartines
        if (toastGroupRef.current) {
            const lift = Math.min(progress, 90);
            toastGroupRef.current.style.transform = `translateY(-${lift}px)`;
        }
    };

    const winGame = () => {
        setIsComplete(true);
        
        if (statusRef.current) {
            statusRef.current.innerText = "C'EST PRÊT !";
            statusRef.current.style.color = "#2ecc71";
            statusRef.current.style.transform = "scale(1)";
        }

        if (footerRef.current) {
            footerRef.current.classList.add('success-state');
        }

        if (rigRef.current) {
            rigRef.current.classList.add('success');
            rigRef.current.classList.remove('shaking');
        }

        if (mouthRef.current) {
            mouthRef.current.style.height = "15px";
            mouthRef.current.style.width = "40px";
            mouthRef.current.style.borderRadius = "0 0 20px 20px";
        }

        if (bodyRef.current) {
            bodyRef.current.style.backgroundColor = "#2ecc71";
        }

        if (handleRef.current) {
            handleRef.current.style.cursor = 'default';
            handleRef.current.style.backgroundColor = '#7f8c8d';
        }

        if (toastGroupRef.current) {
            toastGroupRef.current.style.transform = "none";
        }

        for (let i = 0; i < 15; i++) {
            setTimeout(createSmoke, i * 50);
        }
    };

    const createSmoke = () => {
        if (!rigRef.current) return;
        
        const smoke = document.createElement('div');
        smoke.classList.add('smoke');
        smoke.style.left = (Math.random() * 250) + 'px';
        smoke.style.bottom = '180px';
        rigRef.current.appendChild(smoke);
        
        smoke.animate([
            { opacity: 0.6, transform: 'translateY(0) scale(1)' },
            { opacity: 0, transform: `translateY(-${100 + Math.random() * 100}px) scale(2)` }
        ], { duration: 800, easing: 'ease-out' });
        
        setTimeout(() => smoke.remove(), 800);
    };

    useEffect(() => {
        updateVisuals();
    }, [progress, heat]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isComplete) return;

            setHeat(prev => Math.max(prev - 1.2, 0));
            setProgress(prev => Math.max(prev - 0.4, 0));
        }, 50);

        return () => clearInterval(interval);
    }, [isComplete]);

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <footer 
            id="game-footer" 
            ref={footerRef}
            onMouseDown={pumpAction}
            onTouchStart={(e) => { e.preventDefault(); pumpAction(); }}
        >
            <div className="ui-layer" id="ui-layer">
                <div className="status-text" id="status" ref={statusRef}>GO !</div>
                <div className="sub-status" id="sub-status">Pompez pour chauffer la machine</div>
                <div className="progress-container">
                    <div className="progress-bar" id="bar" ref={barRef}></div>
                </div>
            </div>

            <div className="toaster-rig" id="rig" ref={rigRef}>
                <div className="toast-group" id="toast-group" ref={toastGroupRef}>
                    <div className="toast toast-1">
                        <span>✉️</span>
                        <a href="mailto:contact@moi.com">jgerbaud@etudiant.univ-lr.fr</a>
                    </div>
                    <div className="toast toast-2">
                        <span>📱</span>
                        <a href="tel:+336000000">05 49 78 77 69</a>
                    </div>
                    <div className="toast toast-3">
                        <span>📍</span>
                        <div className="address-text">
                            12 Av. Jacques Bujault, 79000 Niort
                        </div>
                    </div>
                </div>

                <div className="toaster-body" id="body" ref={bodyRef}>
                    <div className="face">
                        <div className="eye"></div>
                        <div className="mouth" id="mouth" ref={mouthRef}></div>
                        <div className="eye"></div>
                    </div>
                    <div className="slots"></div>
                    <div className="foot left"></div>
                    <div className="foot right"></div>
                </div>

                <div className="pump-system">
                    <div className="pump-track"></div>
                    <div className="pump-handle" id="handle" ref={handleRef}></div>
                </div>
            </div>
        </footer>
    );
}