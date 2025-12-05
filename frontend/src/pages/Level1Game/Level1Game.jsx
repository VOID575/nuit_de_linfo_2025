import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Level1Game.css';
import Enemy from '../../components/Ennemy/Enemy';
import shipSprite from '../../pages/Level1Game/SpaceshipSprite.png';
import '../../retroEffect.css';

const Level1Game = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({});
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  // explicit victory flag to avoid relying on potentially stale `enemies` React state
  const [victory, setVictory] = useState(false);
  const [enemies, setEnemies] = useState([]);

  // refs to avoid stale closures inside the animation loop
  const scoreRef = useRef(score);
  const runningRef = useRef(running);
  const gameOverRef = useRef(gameOver);

  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { runningRef.current = running; }, [running]);
  useEffect(() => { gameOverRef.current = gameOver; }, [gameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const WIDTH = 800;
    const HEIGHT = 600;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // load ship image
    const shipImg = new Image();
    shipImg.src = shipSprite;

    // initial game state
    const state = {
      player: { x: WIDTH / 2 - 20, y: HEIGHT - 60, w: 40, h: 16, speed: 300 },
      keys: {},
      bullets: [],
      enemies: [],
      enemyDir: 1,
      enemySpeed: 100,
      lastShot: 0,
      lastTime: performance.now(),
      lastSync: performance.now(),
      spawnMargin: 150,
      rows: 4,
      cols: 6,
    };

    // create enemies grid
    const createEnemies = () => {
      const arr = [];
      const cols = state.cols;
      const rows = state.rows;
      const padding = 20;
      const ew = 32;
      const eh = 20;
      const totalWidth = cols * (ew + padding) - padding;
      const startX = (WIDTH - totalWidth) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          arr.push({
            x: startX + c * (ew + padding),
            y: 60 + r * (eh + 18),
            w: ew,
            h: eh,
            alive: true,
            row: r,
            col: c,
          });
        }
      }
      return arr;
    };

    state.enemies = createEnemies();
    // sync initial enemies to React state
    setEnemies(state.enemies.map((e) => ({ ...e })));

    stateRef.current = state;

    // keyboard handlers
    const keyDown = (e) => {
      stateRef.current.keys[e.code] = true;
      // prevent page scroll when pressing space / arrows
      if (["ArrowLeft", "ArrowRight", "Space", "ArrowUp", "ArrowDown"].includes(e.code)) e.preventDefault();
    };
    const keyUp = (e) => {
      stateRef.current.keys[e.code] = false;
    };
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    // helper functions
    const rectsCollide = (a, b) => {
      return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
    };

    const shoot = (now) => {
      const s = stateRef.current;
      if (now - s.lastShot < 300) return; // fire rate
      s.lastShot = now;
      s.bullets.push({ x: s.player.x + s.player.w / 2 - 3, y: s.player.y - 8, w: 6, h: 10, speed: 500 });
    };

    // game update/draw
    const update = (dt) => {
      const s = stateRef.current;
      // player movement
      if (s.keys['ArrowLeft'] || s.keys['KeyA']) s.player.x -= s.player.speed * dt;
      if (s.keys['ArrowRight'] || s.keys['KeyD']) s.player.x += s.player.speed * dt;
      if (s.keys['Space']) {
        shoot(performance.now());
      }
      // bounds
      if (s.player.x < 0) s.player.x = 0;
      if (s.player.x + s.player.w > WIDTH) s.player.x = WIDTH - s.player.w;

      // bullets
      s.bullets.forEach((b) => (b.y -= b.speed * dt));
      s.bullets = s.bullets.filter((b) => b.y + b.h > 0);

      // enemies movement: simple horizontal with step down on edge
      let hitEdge = false;
      const enemiesAlive = s.enemies.filter((e) => e.alive);
      enemiesAlive.forEach((e) => {
        e.x += s.enemyDir * s.enemySpeed * dt;
        if (e.x < 8 || e.x + e.w > WIDTH - 8) hitEdge = true;
      });
      if (hitEdge) {
        s.enemyDir *= -1;
        enemiesAlive.forEach((e) => (e.y += 18 * 4));
      }

      // collisions bullets vs enemies
      s.bullets.forEach((b) => {
        enemiesAlive.forEach((en) => {
          if (!en.alive) return;
          if (rectsCollide(b, en)) {
            en.alive = false;
            b.y = -1000; // remove bullet
            // update score (update ref to keep canvas HUD in sync)
            setScore((v) => {
              const nv = v + 10;
              scoreRef.current = nv;
              return nv;
            });
          }
        });
      });

      // check enemy reach bottom or collide with player => immediate defeat
      for (let en of s.enemies) {
        if (!en.alive) continue;
        if (en.y + en.h >= s.player.y || rectsCollide(en, s.player)) {
          // immediate defeat
          setGameOver(true);
          gameOverRef.current = true;
          setRunning(false);
          runningRef.current = false;
          en.alive = false; // prevent repeated triggers
        }
      }

      // win condition
      if (s.enemies.every((e) => !e.alive)) {
        setRunning(false);
        runningRef.current = false;
        setGameOver(true);
        gameOverRef.current = true;
        setVictory(true);
      }
    };

    const draw = () => {
      const s = stateRef.current;
      // clear
      ctx.fillStyle = '#001f2f';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // draw player (use sprite if available)
      if (shipImg && shipImg.complete) {
        // draw image slightly larger than player rect for better look
        const imgW = Math.max(s.player.w, 48);
        const imgH = Math.max(s.player.h + 12, 32);
        const drawX = s.player.x + (s.player.w - imgW) / 2;
        const drawY = s.player.y - (imgH - s.player.h);
        ctx.drawImage(shipImg, drawX, drawY, imgW, imgH);
      } else {
        // fallback rectangle
        ctx.fillStyle = '#ffd166';
        ctx.fillRect(s.player.x, s.player.y, s.player.w, s.player.h);
        // little ship tip
        ctx.fillStyle = '#ff8fab';
        ctx.fillRect(s.player.x + s.player.w / 2 - 6, s.player.y - 6, 12, 6);
      }

      // draw bullets
      ctx.fillStyle = '#ffffff';
      s.bullets.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h));

      // HUD (score) - use ref to avoid stale values
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px monospace';
      ctx.fillText(`Score: ${scoreRef.current}`, 12, 20);

      if (gameOverRef.current) {
        // keep a subtle darkening of the canvas but do not draw DOM-replicated text;
        // the actual end UI (button) is rendered in the DOM so it can be interactive.
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
      }
    };

    // main loop
    const loop = (now) => {
      const s = stateRef.current;
      if (!s.lastTime) s.lastTime = now;
      const dt = Math.min(0.05, (now - s.lastTime) / 1000);
      s.lastTime = now;

      // use refs for current running/gameOver
      if (!gameOverRef.current && runningRef.current) update(dt);

      // periodically sync enemies positions to React state (throttle to reduce re-renders)
      if (now - s.lastSync > 60) {
        s.lastSync = now;
        setEnemies(s.enemies.map((e) => ({ ...e })));
      }

      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    // restart handler
    const handleRestart = (e) => {
      if (e.code === 'KeyR') {
        // reset everything
        state.enemies = createEnemies();
        state.bullets = [];
        state.player.x = WIDTH / 2 - 20;
        state.lastShot = 0;
        stateRef.current = state;
        setScore(0); scoreRef.current = 0;
        setGameOver(false); gameOverRef.current = false;
        setVictory(false);
        setRunning(true); runningRef.current = true;
        setEnemies(state.enemies.map((ev) => ({ ...ev })));
      }
    };
    window.addEventListener('keydown', handleRestart);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
      window.removeEventListener('keydown', handleRestart);
    };
  }, []); // run once

  return (
    <div className="level1game-container">
      <div className="level1game-canvas-wrapper" style={{ width: 800, height: 600, position: 'relative' }}>
        <canvas ref={canvasRef} className="level1game-canvas" />
        <div className="enemies-layer" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {enemies.filter((e) => e.alive).map((e) => (
            <Enemy key={`${e.row}-${e.col}`} x={e.x} y={e.y} w={e.w} h={e.h} />
          ))}
        </div>
        {/* end overlay placed inside the canvas wrapper so it sits above the canvas */}
        {gameOver && (
          <div className="level1game-endOverlay" style={{ position: 'absolute', inset: 0 }}>
            {victory ? (
              <NavLink to="/level1End" className="level1game-button">Continuer</NavLink>
            ) : (
              <div className="level1game-gameover">
                <div className="level1game-gameover-title">GAME OVER</div>
                <div className="level1game-restart">Press R to restart</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Level1Game;
