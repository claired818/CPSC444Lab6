import * as THREE from
'https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

// Renderer
const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

// Cube
const geometry =
    new THREE.BoxGeometry();

const material =
    new THREE.MeshPhongMaterial({
        color: 0x888888
    });

const cube =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(cube);

// Ambient Light
const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        0.2
    );

scene.add(ambientLight);

// Single Directional Light
// const directionalLight =
//     new THREE.DirectionalLight(
//         0xffffff,
//         0.65
//     );

// directionalLight.position.set(
//     0,
//     1,
//     0
// );

// scene.add(
//     directionalLight
// );

// Point Light #1
const pointLight1 =
    new THREE.PointLight(
        0xff0000,
        10
    );

pointLight1.position.set(
    3,
    2,
    2
);

scene.add(pointLight1);

// Point Light #2
const pointLight2 =
    new THREE.PointLight(
        0x0000ff,
        10
    );

pointLight2.position.set(
    -3,
    2,
    2
);

scene.add(pointLight2);

// Camera Position
camera.position.z = 3;

// let lightIndex = 0;
// const lightPositions = [
//     [0, 1, 0],
//     [1, 1, 0],
//     [1, 0, 0],
//     [1, -1, 0],
//     [0, -1, 0],
//     [-1, -1, 0],
//     [-1, 0, 0],
//     [-1, 1, 0]
// ];

// let colorIndex = 0;
// const colors = [
//     0xff0000,
//     0xff8800,
//     0xffff00,
//     0x00ff00,
//     0x4477ff,
//     0xaa00ff
// ]
// let lightColor = [];
// setInterval(() =>
//     lightColor = [
//         Math.random(),
//         Math.random(),
//         Math.random()
//     ], 
//     1000
// );

// Animation Loop
function animate()
{
    requestAnimationFrame(
        animate
    );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // ambientLight.color.set(
    //     lightColor[0],
    //     lightColor[1],
    //     lightColor[2]
    // )

    // lightIndex += 0.25;
    // // colorIndex += 0.25;

    // if (lightIndex == lightPositions.length) {
    //     lightIndex = 0;
    // }
    // // if (colorIndex == colors.length) {
    // //     colorIndex = 0;
    // // }

    // if (lightIndex % 1 == 0 || colorIndex % 1 == 0){
    //     directionalLight.position.set(
    //         lightPositions[lightIndex][0], 
    //         lightPositions[lightIndex][1], 
    //         lightPositions[lightIndex][2]
    //     );

    //     // ambientLight.color.set(colors[colorIndex]);
    // }

    renderer.render(
        scene,
        camera
    );
}

animate();

// Resize Handling
window.addEventListener(
    "resize",
    () =>
    {
        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);