// let a=[[1,2],[3,4],[5,6]];
// let b=[[1,2],[3,4],[5,6]];
// let len1=a.length;
// let len2=b.length;
// if(len1==len2 && a[0].length==b[0].length){
//     let wholearry=[];
//     for(let i=0;i<len1;i++){
//         let ae=a[i];
//         let be=b[i];
//         let rowarray=[];
//      for(let j=0;j<ae.length;j++){
//         let add=ae[j]+be[j];
//         rowarray.push(add);//2  4
//      }
//      wholearry.push(rowarray);
//     }
//     console.log(wholearry);

// }
// else{
//     console.log("note equal")
// }



let a=[[1,2],[3,4],[5,6]];
let b=[[1,2],[3,4],[5,6]];
let lenA=a.length;
let lenB=b.length;
if(lenA==lenB && a[0].length==b[0].length){
    let wholearray=[];
    for(let i=0;i<lenA;i++){
        let ar=a[i];
        let br=b[i];
        let rowarray=[]
        for(let j=0;j<ar.length;j++){
            let add=ar[j]+br[j];
            rowarray.push(add);
        }
        wholearray.push(rowarray);
    }
console.log(wholearray);

}
else{
    console.log("the matrix not equal")
}

























