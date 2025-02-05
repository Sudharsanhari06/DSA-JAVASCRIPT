let arr=[-1,2,3,4,5,5,7,10];
let max=arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
    else if(min>arr[i]){
        min=arr[i];
    }
    
}
let ans=max-min;
console.log(ans)