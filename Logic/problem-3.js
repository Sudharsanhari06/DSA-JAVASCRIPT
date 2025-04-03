// sum od digits and reverse a number;
let num=153;
let sum=0;
let r=0;
while(num>0){
    let ans=num%10;
    num=parseInt(num/10);
    r=r*10+ans;
    sum+=ans;

}
console.log(sum);
console.log(r);

