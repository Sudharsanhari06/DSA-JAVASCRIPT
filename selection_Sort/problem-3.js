let arr=[{name:"sudharsan",age:18,mark:100},{name:"sridhar",age:21,mark:99.5},{name:"bala",age:18,mark:100}];
for(let i=0;i<arr.length;i++){
    let minIdx=i;//0
    for(let j=i+1;j<arr.length;j++){
        if(arr[minIdx].age>arr[j].age){
            let temp=arr[minIdx];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);