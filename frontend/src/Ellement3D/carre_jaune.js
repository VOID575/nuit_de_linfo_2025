import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165/build/three.module.js';

let scene, camera, renderer, mesh;
let angle = 2; 
const radius = 7; 

function init() {
    // Scène
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a202c);

    // Caméra
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = radius;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Cube jaune 2x2x2
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xffef36 });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lumières
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(5, 5, 5);
    scene.add(directional);
}

function animate() {
    requestAnimationFrame(animate);

    
    angle += 0; 
    camera.position.x = radius * Math.sin(angle);
    camera.position.z = radius * Math.cos(angle);
    camera.lookAt(mesh.position); 

    renderer.render(scene, camera);
}

// Ajustement du rendu lors du redimensionnement
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Lancer l’animation
window.onload = () => {
    init();
    animate();
};
