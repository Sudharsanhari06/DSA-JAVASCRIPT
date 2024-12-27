let a=[4,2,1,3,6,5];
for(let i=1;i<a.length;i++){
    let temp=a[i];
    let j=i-1;
    while(j>=0 && a[j]>temp){
        a[j+1]=a[j];
        j--;
    }
    a[j+1]=temp;
}
console.log(a);




// bubble sort
// for(let i=0;i<a.length;i++){
// for(let j=0;j<a.length;j++){
// if(a[j]>a[j+1]){
//     let temp=a[j];
//     a[j]=a[j+1];
//     a[j+1]=temp;
// }
// }
// }
// console.log(a);


// selection sort
for(let i=0;i<a.length;i++){
    let minIdx=i;
    for(let j=i+1;j<a.length;j++){
        if(a[minIdx]>a[j]){
            minIdx=j;
        }
    }
    if(minIdx!=i){
        let temp=a[i];
        a[i]=a[minIdx];
        a[minIdx]=temp;
    }

}
console.log(a);
















// for(i=1;i<array.length;i++){
//     let temp=array[i];
//     let j=i-1;
//     while(j>=0 && array[j]>temp){
//         array[j+1]=array[j];
//      j--;
//     }
//     array[j+1]=temp;
// }
// console.log(array);
