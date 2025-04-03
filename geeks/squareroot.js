function squareroot(n){
    let low=1;
    let high=n;
    let ans=0;
while(low<=high){
    let mid=Math.floor((low+high)/2);
    if(mid*mid>n){
        // ans=mid;
        high=mid-1;
    }
    else if(mid*mid<n){
        ans=mid;
        low=mid+1;
    }
    else{
        return mid;
    }
}
return ans;

}
console.log(squareroot(47));

console.log("hello sudharsan");

