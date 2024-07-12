class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map=new Map();

        for(let i=0;i<nums.length;i++)
        {

            if(!map.has(nums[i]))
            {
                map.set(nums[i],i);
            }
            else
            {
                return true;
            }
        }
        return false;
    }
}

