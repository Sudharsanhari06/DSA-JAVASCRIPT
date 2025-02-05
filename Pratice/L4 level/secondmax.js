let arr=[1,2,3,4,5,5,7];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
let smax=arr[0];
for(let j=0;j<arr.length;j++){
    if(smax<arr[j] && arr[j]!=max){
        smax=arr[j];
    }
}
console.log("second max",smax);