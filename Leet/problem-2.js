let accounts =[[1,2,3],[3,2,1]];
let narr=[];
for(let i=0;i<accounts.length;i++){
    let sum=0;
    let b=accounts[i];
    for(let j=0;i<b.length;j++){
        sum+=b[j];
    }
    narr.push(sum);
}
let ans=Math.max(...narr);
console.log(ans);




