let arr=[1,2,3,4,3,2,1,4,4];
let newarr=[];
for(let i=0;i<arr.length;i++){
let dupli=false;
    for(let j=0;j<newarr.length;j++){
        if(arr[i]==newarr[j]){
            dupli=true; 
        }
    }

    if(!dupli){
        newarr.push(arr[i]);
    }
}
console.log(newarr);