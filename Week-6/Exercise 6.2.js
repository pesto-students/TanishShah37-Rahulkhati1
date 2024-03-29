var spiralOrder = function(matrix) {

    if (matrix.length == 0) return [];

    var ret = [], m = matrix.length, n = matrix[0].length;

    for (let j = 0; m > 0 && n > 0; ++j) {
        
        // first row
        for (let i = j; i < matrix[0].length - j && m > 0; ++i) {
            ret.push(matrix[j][i]);
        }
        m--;
        // last column
        for (let i = 1+j; i < matrix.length - 1-j && n > 0; ++i) {
            ret.push(matrix[i][matrix[0].length - 1-j]);
        }
        n--;
        // last row
        for (let i = matrix[0].length - 1-j; i >= j && m > 0; --i) {
            ret.push(matrix[matrix.length-1-j][i]);
        }
        m--;
        // first column
        for (let i = matrix.length - 2-j; i >= 1+j && n > 0; --i) {
            ret.push(matrix[i][j]);
        }
        n--;
    }
    
    return ret;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(spiralOrder(matrix));

