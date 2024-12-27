// Given an array of Integers, remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3] output [3, 4, 1, 5, 9]
let arr1=[3, 4, 1,1,1,1,14,24, 1, 9, 3];
// let n=[];
// console.log(n.length)
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<=arr1.length;j++){
      if(arr1[i]==arr1[j]){
         arr1.splice(j,1);
      }
    }
}
console.log(arr1)