// maxoccuring in code;
let arr=[5,5,4,1,1,1,6,7,8,8,8,8];
let obj={};
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }else{
        obj[arr[i]]=1
    }
}
// console.log(obj);
let max=0;
for(let key in Object.keys(obj)){
    // if(max<obj[key]){
    //     max=obj[key];
    //     var b=key;
    // }
    console.log(obj[key])
}
// console.log(b);
