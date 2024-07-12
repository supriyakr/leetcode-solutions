function maxArea(height) {

    let left= 0;
    let right= height.length-1;
    let maxArea=0;

   while(left< right)
   {
    let currentArea=0;
    currentArea=Math.min(height[left],height[right])*(right-left);
    maxArea= Math.max(currentArea, maxArea);
    if(height[left]>height[right])
    {
        right--;
    }
    else
    {
        left++;
    }
   }
   return maxArea;
    
};