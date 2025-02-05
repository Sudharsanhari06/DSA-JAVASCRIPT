// /capital letter to convert lowercase;
let s="SUDHARsan";
let str="";
for(let i=0;i<=s.length-1;i++){
    if(s[i]>='A' && s[i]<='Z'){
       let b=s[i].charCodeAt(0)+32;
    //   console.log(b)
       let z=String.fromCharCode(b)
      str+=z;
    }
    else{
        str+=s[i];
    }   
}
console.log(str);