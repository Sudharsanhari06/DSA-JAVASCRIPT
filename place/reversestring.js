let s="ereht olleh dlrow";
let strarr=s.split(' ');

let wholearr=[]
for(let i=0;i<strarr.length;i++){
    let b=strarr[i];
    let nb="";
    
    for(let j=b.length-1;j>=0;j--){
       
        nb+=b[j];
    }
    
    wholearr.push(nb);
}
console.log(wholearr.join(' '));