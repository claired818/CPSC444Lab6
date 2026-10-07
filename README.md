# Three.js Lighting Lab

## Learning Objectives

Students will learn:

1. Ambient Lighting
2. Directional Lighting
3. Point Lighting
4. Light Colors
5. Animated Lights
6. Multiple Light Sources

---

## Running the Lab

VS Code Live Server is recommended.

Open:

lighting.html

You should see:

- Rotating Cube
- Black Background
- Moving Light
- Changing Light Colors

---

## Activity 1 - Ambient Light

Find:

```javascript
const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        0.2
    );
```

Experiment with:

```javascript
0.0
0.5
1.0
```

Questions:

1. What is ambient light?
2. What happens when ambient light increases?

---

## Activity 2 - Directional Light

Find:

```javascript
directionalLight.position.set(
    1,
    1,
    1
);
```

Try:

```javascript
1,0,0
-1,0,0
0,1,0
0,-1,0
```

Questions:

1. Which faces become brighter?
2. Why?

---

## Activity 3 - Colored Lights

Try:

```javascript
0xff0000
```

Red

```javascript
0x00ff00
```

Green

```javascript
0x0000ff
```

Blue

```javascript
0xffff00
```

Yellow

Questions:

1. Which color has highest contrast?
2. Why do shadows remain dark?

---

## Activity 4 - Animated Light

Observe the moving light source.

Questions:

1. Why do highlights move?
2. Why does the cube appear different as it rotates?

---

## Activity 5 - Disco Cube

Requirements:

- Rotating cube
- Moving light
- Changing light color
- Ambient light enabled

---

## Challenge 1

Create a purple light.

---

## Challenge 2

Make the light randomly change colors every second.

---

## Challenge 3

Add a Point Light.

Example:

```javascript
const pointLight =
    new THREE.PointLight(
        0xffffff,
        2
    );

scene.add(
    pointLight
);
```

Questions:

1. How is a point light different from a directional light?
2. Which resembles a light bulb?

---

## Reflection Questions

1. What is ambient lighting?
2. What is directional lighting?
3. What is point lighting?
4. Why do we need normals?
5. Why do some faces appear brighter?
6. How does moving a light affect a scene?
7. How does changing color affect realism?
8. Why does Three.js make lighting easier than WebGL?