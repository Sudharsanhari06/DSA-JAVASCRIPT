function binarysearch(arr,target){
    let narr=arr.sort((a,b)=>a-b);
    console.log(narr);
    
    
    let left=0;
    let right=arr.length-1;
    
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]<target){
           left=mid+1;
        }
        else{
            right=mid-1;
        }
        
    }
    return -1;
    
    
}
console.log(binarysearch([2, 4, 5, 6, 3, 7],3));