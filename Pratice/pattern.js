let n = 5;
pattern5(n);

function pattern1(n) {
    for (let i = n; i >= 1; i--) {
        let str = "";
        for (let s = 0; s < n - i; s++) {
            str += " "
        }
        for (let j = 1; j <= i; j++) {
            str += i;
        }
        console.log(str);
    }
}


function pattern2(n) {
    for (let i = 0; i < n; i++) {
        for (let s = 0; s < i; s++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j < n * 2 - i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}


function pattern3(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            process.stdout.write("* ");
        }

        console.log();
    }
}


function pattern4(n) {
    for (let i = 1; i <= n; i++) {
        for(let s=0;s<i;s++){
            process.stdout.write(" ");
        }
        for(let j=1;j<=n+1-i;j++){
            process.stdout.write(j+" ")
        }
        console.log()
    }

}

function pattern5(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}





