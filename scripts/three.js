// 1. STSEEN JA KAAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

// 2. RENDERDAJA
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Lisab 3D lõuendi lehele

// 3. OBJEKT (Geomeetria + Materjal = Mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 4. ANIMATSIOONI TSÜKKEL (Et kuubik liiguks)
function animate() {
    requestAnimationFrame(animate);
    
    // Paneme kuubiku pöörlema
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();