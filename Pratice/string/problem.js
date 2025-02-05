let str= ["Ram", "Abraham", "Peter","Abraham"];
let s=0;
for(let i=0;i<str.length;i++){
    let b=str[i].length-1;
    if(s<b){
        s=b;
        var ans=str[i];
    }
    
}
console.log(ans);