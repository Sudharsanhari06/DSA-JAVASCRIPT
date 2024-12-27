// To find Armstrong Number between two givenumn number.
function findarmstrongNumber(num){
    let original=num
    var count=0;
    let arr=[];
    while(num>0){
        let n=num%10;
        num=Math.floor(num/10);
        count++;
        arr.push(n)
    }

    console.log(arr)
    let sum=0;
    for(let i=0;i<arr.length;i++){
        let add=arr[i]**count;
        sum+=add;
    }
    console.log(sum)
    console.log(num);
    if(sum==original){
        console.log("It is a armstrong number"); 
    }
    else{
        console.log("Not armstrong number");
    }
    
}
findarmstrongNumber(153)





