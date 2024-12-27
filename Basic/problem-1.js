// leap yer or not

function LeapYear(year) {

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            var ans="It is a leap year"
        }
        else{
            ans="It is a Not leap year"
        }
    }
    else{
        ans="It is a leap year"
    }

}
else{
    ans="It is a not leap year"
}
return ans;

}
console.log(LeapYear(1900))



