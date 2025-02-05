let arr=["M 3", "J 1", "T 2"]
let m=500;
let j=3000;
let t=1500;
let p=10;
let sum=0;
for(let i=0;i<arr.length;i++){
    let b=arr[i].split(' ');
    let lower=b[0].toLowerCase();
    // console.log(lower)
    if(lower=='m'){
         let ans=Number(b[1])*m;
         console.log(ans);
         sum+=ans;
    }
    else if(lower=='j'){
    //   console.log(j)  
       let ans=Number(b[1])*j;
        //  ans+=sum
         console.log(ans);
     sum+=ans;
    }
    else if(lower=='t'){
        //   console.log(j)  
           let ans=Number(b[1])*t;
        //  ans+=sum;
         console.log(ans);
          sum+=ans;
    }
    else if(lower=='p'){
         let ans=Number(b[1])*p;
        //  ans+=sum;
         console.log(ans);
          sum+=ans;
    }
    
    
}



console.log(sum)