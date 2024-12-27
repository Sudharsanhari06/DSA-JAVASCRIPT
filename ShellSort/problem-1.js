// let arr = [23, 12, 1, 8, 34,54, 2, 3];
// console.log(arr);
// function shellSort(array) {
//     let n = array.length;
//     let gap = Math.floor(n / 2); // 4     Start with a large gap 
//         //1>0
//     while (gap > 0) {
//         for (let i = gap; i < n; i++) {
//             let temp = array[i]; //  1   Current element
//             let j = i; // 2
//             // Compare and shift elements using the gap
//             while (j >= gap && array[j - gap] > temp) {
//                 array[j] = array[j - gap];
//                 j = j-gap;
//             }

//             // Place the temp element at the correct position
//             array[j] = temp;
//         }

//         gap = Math.floor(gap / 2); // Reduce the gap
//         console.log(array)
//     }

//     //return array; // Return the sorted array
// }

// // Example Usage

// // console.log("Unsorted Array:", arr);
// (shellSort(arr));


var arr = [50, 12, 1, 8, 34,54, 2, 3];
let len=arr.length;
let gap=Math.floor(len/2);
while(gap>0){
    for(let i=gap;i<len;i++){
        let temp=arr[i];
        let j=i;
        while(j>=gap && arr[j-gap]>temp){
            arr[j]=arr[j-gap];
            j=j-gap;
        }
        arr[j]=temp;

    }
    gap=Math.floor(gap/2);

}
console.log(arr);



// for(let i=1;i<arr.length;i++){
//     let temp=arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>temp){
//        arr[j+1]=arr[j];
//        j--;
//     }
//     arr[j+1]=temp;
// }
// console.log(arr);


    // for(i=1;i<=arr.length;i++){
    //     let temp = arr[i];
    //     let j=i-1;
    //     while(j>=0 && arr[j]>temp){
    //         arr[j+1]=arr[j];
    //         j--;
    //     }
    //     arr[j+1] = temp;
    // }
    // console.log(arr);

