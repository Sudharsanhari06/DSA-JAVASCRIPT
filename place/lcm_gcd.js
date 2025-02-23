function lcmgcd(a,b){
    if(a==0){
    //    console.log(b);
    gcd=b; 
    }
    else if(b==0){
        // console.log(a); 
    gcd=a; 

    }

    let min=a<b?a:b;
    for(let i=1;i<=min;i++){
        if(a%i==0 && b%i==0){
            gcd=i;
        }
    }
    console.log("Gcd",gcd);
    let mul=a*b;
    // console.log("mul",mul)
    let lcm=mul/gcd;
    
    console.log("Lcm",lcm)
}


lcmgcd(6,0)