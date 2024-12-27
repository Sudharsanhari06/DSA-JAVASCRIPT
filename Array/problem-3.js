// Add an element in an array, don't add if its already present. For eg in an array [5, 10, 3, 11, 18], if we add 3 it should allow as the element is already there. 

function addElementArray(arr,a){
let len=arr.length;
let isvalue=true;
for(let i=0;i<len;i++){
    if(arr[i]==a){
        isvalue=false;
    }
}
if(isvalue){
    arr.push(a);
    console.log(arr);
}
else{
    console.log(arr)
}


}
addElementArray([5, 10, 3, 11, 18],6);