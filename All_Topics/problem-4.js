// Program to Find Factorial of a Number and the factorial number's sum of digits

function fact(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("factorial of number:"+fact);
    let sum = 0;
    while (fact > 0) {
        let n = fact % 10;
        fact = Math.floor(fact / 10);
        sum += n;
    }
    console.log("factorial sum of digits: "+sum);
}
fact(5);

