// prime numbers
function isprime(num){
    let p=true;
if(num<=1){
    p=false;
}

if(num==2){
    p=true;
    }
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        p=false;
    }
}
if(p){
 console.log("prime number")   
}
else{
    console.log("not prime number");
}
    
}
isprime(59)