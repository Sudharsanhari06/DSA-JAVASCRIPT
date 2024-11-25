// let num=[2,3,5,1,4];
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
console.log(bubblesort(["a","e","d","b"]));