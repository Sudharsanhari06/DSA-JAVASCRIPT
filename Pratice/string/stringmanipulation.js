let s1="This is a Stringis is";
let s2="is";
let count=0;
for(let i=0;i<s1.length-1;i++){
    let b=s1[i]+s1[i+1];
    if(b==s2){
       count++; 
    }
}
console.log(count);