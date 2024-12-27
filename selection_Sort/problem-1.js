let arr=[20,18,19,5,4,2,90,1,10];
for(let i=0;i<arr.length;i++){
    let minIdx=i;//7
    for(let j=i+1;j<arr.length;j++){
        if(arr[minIdx]>arr[j]){
           minIdx=j;
        }
    }
    if(minIdx!=i){
        let temp=arr[i];//20
        arr[i]=arr[minIdx];//1
        arr[minIdx]=temp;//20
    }

}
console.log(arr);