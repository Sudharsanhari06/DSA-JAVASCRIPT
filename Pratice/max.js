let arr=[4, 6,1, 2, 5,6, 6, 3] ;
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
        var ans=i;
    }
}
console.log(ans)