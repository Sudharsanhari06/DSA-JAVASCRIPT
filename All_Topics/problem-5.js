// Program to print the elements of an array present on even position

function printevenposition(nums){
    for (let i=0; i < nums.length;i++) {
        if(i%2==0){
            console.log(nums[i])
        }
    }

}
printevenposition([1, 2, 3, 4, 5, 6])
