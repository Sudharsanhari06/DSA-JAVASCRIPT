//Strong Number Program
// ex 145==> 1!+4!+5!=145 its a strong number.
let num=145;
let ori=num;
let sum=0;
while(num>0){
    let ans=num%10;
    num=parseInt(num/10);
    let fa=fact(ans);
    sum+=fa;
}
function fact(n){
    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;
    }
    return f;
}
if(ori==sum){
    console.log("strong number");
}
else{
    console.log("Not strong number");
}



