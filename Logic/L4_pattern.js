// // 1       1
// // 2 2   2 2
// // 3 3 3 3 3 
// let n=3;
// for(let i=1;i<=n;i++){
//     var str="";
//     for(let j=1;j<=i;j++){
//         str+=i+" ";
//     }

//     for(let s=1;s<=(n-i)*2;s++){
//         str+=" ";
//     }
//     for(let k=1;k<=n;k++){
//         str+=i+" ";
//     }

// console.log(str);
// }
let n=3;
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+=i+" ";
    }
    for(let s=1;s<=(n*2)-(i*2);s++){
        str+="  ";
    }
    for(let k=1;k<=i;k++){
        str+=i+" ";
    }
    console.log(str);
}

















