// To calculate Fibonacci Series up to n numbers.

let a=0;
let b=1;
let n=5;
for(let i=1;i<=n;i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c
}


