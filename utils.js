function multiplyMatrix(matrix1, matrix2) {
    let rowNum = matrix1[0].length;
    if (matrix2.length == rowNum) {
        let result = [];
        let columnNum = matrix2[0].length;
        for (let i = 0; i < rowNum; i++) {
            result[i] = [];
            for (let j = 0; j < columnNum; j++) {
                let sum = 0;
                for (let k = 0; k < rowNum; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    } else return null;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowNum = '';
        for (let j = 0; j < matrix[0].length; j++) {
            rowNum += '' + matrix[i][j] + ' ';
        }
        console.log(rowNum);
    }
}
module.exports = {
    multiplyMatrix,
    printMatrix
}