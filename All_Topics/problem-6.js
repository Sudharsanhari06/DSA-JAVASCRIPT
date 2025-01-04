//Program to print the elements of an array present on odd position
function oddposition(nums){

    for(let i=0;i<nums.length;i++){
        if(i%2!=0){
            console.log(nums[i]);
        }
    }

}
oddposition([1,2,3,4,5,6])