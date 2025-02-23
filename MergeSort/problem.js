function mergeSort(arr,l,r){

   if(l<r){
    let mid=parseInt((l+r)/2);
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    
    merge(arr,l,mid,r);
   } 

}

function merge(arr,l,mid,high){
    let temp=[];
    let left=l;
    let right=mid+1;
while(left<=mid && right<=high){
    if(arr[left]<=arr[right]){
        temp.push(arr[left]);
        left++;
    }
    else{
        temp.push(arr[right]);
        right++;
    }
}

while(left<=mid){
    temp.push(arr[left]);
    left++;
}
while(right<=high){
temp.push(arr[right]);
right++;
}






}

let l=0;
let r=arr.length;
mergeSort([2,3,1,7,6],l,r);


















