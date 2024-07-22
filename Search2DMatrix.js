class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * Time Complexity O(log(m*n))
     * 1.	Flattening the Matrix: The matrix is conceptually flattened by treating it as a 1D array.
     *  The element at position i in the flattened array is the 
     * element at matrix[Math.floor(i / cols)][i % cols] in the 2D array.
	    2.	Binary Search: The binary search operates over the range [0, rows * cols - 1]:
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;

        let rows = matrix.length;
        let cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let midElement = matrix[Math.floor(mid / cols)][mid % cols];

            if (midElement === target) {
                return true;
            } else if (midElement < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}