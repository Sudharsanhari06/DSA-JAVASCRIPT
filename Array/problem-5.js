let a=[10,20,1,3,5,6,7,8,8];
let b=[10,20,5,6,4,5,6,6,8];
let s=[];
for(let i=0;i<b.length;i++){
    if(a.includes(b[i])){
        if(!s.includes(b[i])){
            s.push(b[i]);
        }
    }
}
console.log(s);