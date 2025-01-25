function factorial(n) {
    if (n < 0) {
        return -1;
    }
    if(n === 0 || n == 1) {
        // console.log(n);
        return 1;
    }
    else {
        let result =  n * factorial(n-1);
        // console.log(result);
        return result;
    }

}

result = factorial(3);
console.log(result);









