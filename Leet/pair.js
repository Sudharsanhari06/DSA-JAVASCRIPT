let nums=[1,2,3];
var c=0;
for(let i=0;i<nums.length;i++){

    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j] && i<j){
            c++;
        }
    }
}
console.log(c);
