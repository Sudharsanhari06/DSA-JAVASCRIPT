// let n=3;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         process.stdout.write("* ");
//     }
//     console.log()
// }

let n = 5;
// for (let i = 1; i <= n; i++) {
//     for (let s = 0; s < n - i; s++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(i + " ")
//     }
//     console.log();
// }


for(let i=1;i<=n;i++){
    for(let s=0;s<i;s++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=(n+1)-i;j++){
        process.stdout.write("* ")
    }
    console.log();
}


