// implement  the string
let str="VAJESH";
let arr=str.split('');
let obj={};
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1;
    }
}

let istrue=false;
for(let key in obj){
    if(obj[key]<=1){
        istrue=true;
    }
    else{
        istrue=false;
        break;
    }
}
if(istrue){
    console.log(str+": "+true);
}
else{
    console.log(str+": "+false)
}






