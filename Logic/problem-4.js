// Factors of a number program and perfect number program
let num=12;
let sum=0;
for(let i=0;i<num;i++){
    if(num%i==0){
        sum+=i;
        console.log(i);
    }
}
if(num==sum){
    console.log("perfect number: "+sum);
}
else{
    console.log("not perfect number..");
    
}




