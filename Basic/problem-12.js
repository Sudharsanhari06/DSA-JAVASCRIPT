// To find out whether the given String is Palindrome or not.
function Palindromeornot(str){
    let lower=str.toLowerCase();
    let newstr="";
    for(let i=lower.length-1;i>=0;i--){
        newstr+=lower[i];
    }
    if(lower==newstr){
        return "palidrome"
    }
    else{
        return "Not palindrome"
    }


}
console.log(Palindromeornot("madam"))

