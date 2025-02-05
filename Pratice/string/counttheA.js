let str= ["apple", "appeal", "after", "baniaaash"];

let s=0;
for(let i=0;i<str.length;i++){
    let b=str[i];
    let count=0;
    for(let j=0;j<b.length;j++){
        if(b[j]=='a'){
            count++;
        }
    }
    if(s<count){
        s=count;
    }
}
console.log(s);