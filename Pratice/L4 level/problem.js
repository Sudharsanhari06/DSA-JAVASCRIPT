let arr=[2,10,4,0,6];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);



//min
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
}
console.log(min);


