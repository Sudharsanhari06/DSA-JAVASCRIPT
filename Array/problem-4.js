// Given an two arrays, given to Set Union on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11].  Result [3, 1, 5, 7, 8, 10, 11]

function arrunion(arr1,arr2){
    let n=[];
    for(let i=0;i<arr1.length;i++){
        if(!n.includes(arr1[i])){
            n.push(arr1[i]);
        } 
    }
    for(let j=0;j<arr2.length;j++){
        if(!n.includes(arr2[j])){
            n.push(arr2[j])
        }
    }
    console.log(n);
}
arrunion([3, 1, 5, 7, 8],[5, 1, 8, 10, 11])