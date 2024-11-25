let arr=[20,18,19,5,4,2,9,1,10];
for(let i=0;i<arr.length;i++){
    let minIdx=i;//0
    for(let j=i+1;j<arr.length;j++){
        if(arr[minIdx]>arr[j]){
            let temp=arr[minIdx];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);