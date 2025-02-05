let arr=[1,2,3,4,5,6,8,8,4,2];

let newarr=[];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
          if(arr[i]==arr[j]){
        newarr.push(arr[i]);
    }
        
    }
  
}
console.log(newarr);
