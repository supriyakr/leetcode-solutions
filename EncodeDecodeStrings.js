class EncodeDecode{

// encodes a list of string into a single encoded string
    encodeStrings(strs)
    {
        let res="";
        for(let i=0;i<strs.length;i++)
            {
                res= res.concat(strs[i].length, '#', strs[i]);
            }
        return res;

    }

//decodes a string into an array of strings
    decodeString(str)
    {
        let res=[];
        let i=0;
        while(i< str.length)
            {
                let start =i;
               
                while(str[i]!='#')
                    {
                        i++;
                    }
                
                        let length= parseInt(str.substring(start,i));
                        let decodeStr= str.substring(i+1, length+i+1);
                        res.push(decodeStr);
                        i= length+i+1;

            }
            return res;

    }
}