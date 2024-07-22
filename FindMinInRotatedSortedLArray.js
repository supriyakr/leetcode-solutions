/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0;
    let r= nums.length-1;
    //edge case
    if(nums.length==1)
    {
        return nums[0];
    }
    while(l<r)
    {
        let mid= Math.floor((l+r)/2);
        if(nums[mid]>nums[l] && nums[mid]<nums[r])
        {
            return nums[l];
        }
        
          else  if(nums[mid]<nums[l] && nums[mid]<nums[r])
            {
                r= mid;
            }
            else if(nums[mid]>nums[l] && nums[mid]> nums[r])
            {
                l=mid;

            }
            else if(nums[mid]<nums[l] && nums[mid]>nums[r])
            {
                l= mid;
            }
            else
            {
             
                return Math.min(nums[l],nums[r]);

            }
        
        }
       
    
    
    
};