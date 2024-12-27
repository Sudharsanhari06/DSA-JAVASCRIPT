function bubblesort(num){
    for(let i=0;i<=num.length-1;i++){
        for(let j=0;j<num.length-i-1;j++){
            if(num[j]>num[j+1]){
                temp=num[j];
                num[j]=num[j+1];
                num[j+1]=temp;
            }
        }
    }
    return num;
}
console.log(bubblesort([3,4,2,7,6,5]));