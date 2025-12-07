import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165/build/three.module.js';

let scene, camera, renderer, mesh;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a202c);

    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);


    const UNIT = 1; 
    const iW = UNIT * -1;
    const W = UNIT * 2; 
    const H = UNIT * 2; 

    const shape = new THREE.Shape();

    shape.moveTo(0, 0);

    shape.lineTo(W, 0);       
    shape.lineTo(W, UNIT);    
    shape.lineTo(UNIT, UNIT); 

    shape.lineTo(UNIT, H);    
    shape.lineTo(0, H);      

    shape.lineTo(0, 0);     

    shape.lineTo(0, iW);       
    shape.lineTo(UNIT, iW);    
    shape.lineTo(UNIT, UNIT + UNIT);    

    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 1,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.05,
        bevelThickness: 0.02
    });

    geometry.computeBoundingBox();
    const center = new THREE.Vector3();
    geometry.boundingBox.getCenter(center);
    geometry.translate(-center.x, -center.y, -center.z);

    const material = new THREE.MeshStandardMaterial({
        color: 0xff25d9,
        roughness: 0.5,
        metalness: 0.8
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    mesh.rotation.x = Math.PI / 7;
    mesh.rotation.y = Math.PI / 1;


    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const directional = new THREE.DirectionalLight(0xffffff, 1.5);
    directional.position.set(5, 5, 5);
    scene.add(directional);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.onload = () => {
    init();
    animate();
};
