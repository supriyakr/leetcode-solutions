function productExceptSelf(nums) {

    const n= nums.length;
    const pre = new Array(n);
    const suff= new Array(n);
    const output=new Array(n);

    pre[0]=1;
    suff[n-1]=1;

    for(let i=1;i<n;i++)
    {
      pre[i]=pre[i-1]*nums[i-1];
    }

     for(let i=n-2;i>=0;i--)
    {
        suff[i]= suff[i+1]*nums[i+1];
    
    }
    for(let i=0;i<n;i++)
    {
      output[i]=pre[i]*suff[i]
    }
    return output;


    
};