function palindrome(num){
    let str=num.toString();
    let nstr="";
    let ans;
    for(let i=str.length-1;i>=0;i--){
        nstr+=str[i];
    }
    if(str==nstr){
        ans="Yes";
    }
    else{
        ans="No"
    }
    return ans;
}
console.log(palindrome("mam"));
console.log(palindrome("121"));