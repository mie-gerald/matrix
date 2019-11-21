const utils = require('./utils.js');

let firstMatrix = [
    [12, 67, 12],
    [3, 32, 43],
    [8, 4, 0]
];
let secondMatrix = [
    [13, 52, 4],
    [234, 64, 534],
    [65, 67, 48]
];

utils.printMatrix(utils.multiplyMatrix(firstMatrix, secondMatrix));