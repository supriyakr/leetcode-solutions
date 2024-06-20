class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         //create a map
      //iterate over strs and sort each string
      //check if sorted string exists in the map
      //if it exists get the key using sorted string and push the string into the array of values
      //add sorted string as key and the original string in array as value.
      //create an array from map.values
      //return array
        let map= new Map();

        for(let i=0;i<strs.length;i++)
            {
               let sortedStr=strs[i].split("").sort((a,b)=>a.localeCompare(b)).join();

               if(map.has(sortedStr))
                {
                    map.get(sortedStr).push(strs[i])
                }
                else
                {
                    map.set(sortedStr,[strs[i]]);
                }

              
            }
            var output = Array.from(map.values());
            return output;
  


         
    }
}

const output = new Solution();
console.log(output.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));