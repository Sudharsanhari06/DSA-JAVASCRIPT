let arr=[1,2,3,4,3,2,1,4,4];
let narr=[];
for(let i=0;i<arr.length;i++){
    let dupli=false;
    for(let j=0;j<narr.length;j++){
        if(arr[i]==narr[j]){
            dupli=true;
            break;
        }
        }

        if(!dupli){
            narr.push(arr[i]);
        }
}
console.log(narr);