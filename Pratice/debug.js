// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printTriangle(n);


// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2;i<num;i++) {
//         if (num%i == 0) { 
//             return false;
//         }
//     }
//     return true;
// }
// let num = 53;
// // Example usage
// console.log(isPrime(num));


// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j==1 || j==n) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }
// // Example usage
// let n = 5;
// printHollowSquare(n);

// lcm
// function lcm(num1,num2){
//     let min=num1<num2?num1:num2;
//     // console.log(min);
//     for(let i=1;i<=min;i++){
//         if(num1%i==0 && num2%i==0){
//             var gcd=i;
//         }
//     }
//     let lcm=num1*num2;
//     let total=lcm/gcd;
//     console.log(total);
    
// }
// lcm(5,7);


// let n=5;
// let sum=0;
// for(let i=1;i<=n;i++){
//     let fact=1;
//     for(let j=1;j<=i;j++){
//         fact=fact*j;
//     }
//     sum+=fact;
// }
// console.log(sum);


// prime numbers

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





