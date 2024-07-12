/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let rows= Array.from({ length: 9 }, () => new Set());
    let cols= Array.from({ length: 9 }, () => new Set());
    let boxes= Array.from({ length: 9 }, () => new Set());
    for(let r=0;r<9;r++)
    {
        for (let c=0;c<9;c++)
        {
            if(board[r][c]==".")
            {
                continue;
            }
            let num=board[r][c];
            let boxId= Math.floor(r/3)*3+Math.floor(c/3);
            if(rows[r].has(num) || cols[c].has(num) || boxes[boxId].has(num))
            {
                return false;
            }

            rows[r].add(num);
            cols[c].add(num);
            boxes[boxId].add(num);
            
        }
    }
    return true;
};