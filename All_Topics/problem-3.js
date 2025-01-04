// Program to Calculate the Sum of Natural Numbers and find the largest digit of the
// sum


function sum(n) {
    let arr = [];
    let sum = 0;
    let sum2=0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    while (sum > 0) {
        let num = sum % 10;
        sum = parseInt(sum / 10);
        arr[arr.length] = num;
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    for(let j=1;j<=max;j++){
        sum2+=j;
    }
    console.log(sum2);


}
sum(11)











