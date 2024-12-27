// let a=[6,5,2,1];
// selection sort
// for(let i=0;i<a.length;i++){
//     let minIdx=i;
//     for(let j=i+1;j<a.length;j++){
//         if(a[minIdx]>a[j]){
//             minIdx=j;
//         }
//     }
//     if(minIdx !=i){
//         let temp=a[i];
//         a[i]=a[minIdx];
//         a[minIdx]=temp;
//     }
// }
// console.log(a);


// insertion sort
// for(let i=1;i<a.length;i++){
//     let temp=a[i]
//     let j=i-1;
// while(j>=0 && a[j]>temp){
//     a[j+1]=a[j];
//     j--;
// }
// a[j+1]=temp;

// }
// console.log(a)



// let a=[[1,2],[3,4],[5,6]];
// let b=[[1,2],[3,4],[5,6]];

// let lenA=a.length;
// let colA=a[0].length;
// let colB=b[0].length;
// let lenB=b.length;
// if(lenA==lenB && colA==colB)
// {
//     let wholearray=[]
// for(let i=0;i<lenA;i++){
//     let rowarray=[];
//     for(let j=0;j<colA;j++){
//         var add=a[i][j]+b[i][j]
//     rowarray.push(add)
//     }
//     wholearray.push(rowarray)
// }

// console.log(wholearray);
// }
// else{
//     console.log("not equal");
    
// }


let a=[[1,2,3],[3,4,5],[5,6,7]];
let b=[[1,2],[3,4],[5,6]];
let lenA=a.length;
let colA=a[0].length;
let colB=b[0].length;
let lenB=b.length; 
if(colA==lenB){
let result=Array.from({length:lenA},()=>Array(colB).fill(0))
for(let i=0;i<lenA;i++){
   for(let j=0;j<colB;j++){
    for(let k=0;k<colA;k++){
        result[i][j]+=a[i][k]*b[k][j];
    }
   }

}
console.log(result);
}
else{
    console.log("not");
    
}