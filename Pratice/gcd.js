let a=20;
let b=0;
let ans;
let min=a<b?a:b;
if (a === 0) {
    ans = b;
} else if (b === 0) {
    ans = a;
}
else{
    for(let i=1;i<=min;i++){
        if(a%i==0&& b%i==0){
            ans=i;
        }
    }
}
console.log(ans);


let mul=a*b;
let lcm=mul/ans;
console.log("lcm",lcm);

