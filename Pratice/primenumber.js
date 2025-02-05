function printPrimesInRange(m,n){
    var primenumber="";
    for(let i=m;i<=n;i++){
        let num=i;
        let isprime=true;
        for(let j=2;j<=Math.sqrt(num);j++){
            if(num%j==0){
                isprime=false;
            }
        }
        if(isprime){
            primenumber+=num+", ";
        }
    }

    if(primenumber.length!=0){
        console.log(primenumber.slice(0,primenumber.length-2))
    }
    else{
        console.log("No primes in this range")
    }


}

printPrimesInRange(8,10)

