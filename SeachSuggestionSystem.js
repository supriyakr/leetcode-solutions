/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let res=[];
    products.sort();
    let l=0;
    let r=products.length-1;

    for(let i=0;i<searchWord.length;i++)
    {
        let c= searchWord[i];
    while(l<=r && (products[l][i]!=c || products[l].length<=i))
    {
        l++;
    }
    while(l<=r && (products[r][i]!=c || products[r].length<=i))
    {
        r--;
    }
    let temp=[];
    let remain= r-l+1;
    for(let j=0;j<Math.min(3,remain);j++)
    {
        temp.push(products[l+j]);
    }
    res.push(temp);
    }
    return res;
    
};