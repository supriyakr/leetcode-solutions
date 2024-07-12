class Solution {
    /**
         * @param {number[]} nums
         * @return {number[][]}
         */
        threeSum(nums) {
            nums.sort((a,b)=>a-b);
            let outArr=[];
            for(let i=0;i<nums.length-2;i++)
            {
                
                let l= i+1;
                let r= nums.length-1;
                if(nums[i]>0)
                {
                    break;
                }
                if(i>0 && nums[i]==nums[i-1])
                {
                    continue;
                }
               
                while(l<r)
                {
                     let sum= nums[i]+nums[l]+nums[r];
                    if(sum<0)
                    {
                        l++;
                    }
                    else if(sum>0)
                    {
                        r--;
                    }
                    else 
                    {
                        outArr.push([nums[i],nums[l],nums[r]]);
                        while(l<r && nums[l+1]==nums[l])
                        {
                            
                            l++;
    
                        }
                        while(l<r && nums[r]==nums[r-1])
                        {
                          
                            r--;
    
                        }
                        l++;
                        r--;
    
                    }
                }
     
            }
            return outArr; 
        }
    }
    