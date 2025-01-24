// Take a variable with distance in **meters** as input and output the same distance *converted* to **yards**.

function convertMetersToYards(meters){
    let yards = meters*1.094;
    return yards;
}

let meters = 100;
let yards = convertMetersToYards(meters);

console.log(`${meters} meters is ${yards} yards`);

export {convertMetersToYards}