// This program *calculates* the **volume of a cube** based on the **length of 1 edge in meters**

function calculateCubeVolume(length) {
    // length cubed 
    let volume = Math.pow(length, 3);
    return volume;
}

let length = 4;
let volume = calculateCubeVolume(length);

console.log(`${volume} is the volume of the cube`);

export { calculateCubeVolume }