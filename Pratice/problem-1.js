// leap year

function leap(num) {
    if (num % 4 == 0) {
        if(num%100==0){
            if(num%400==0){
                console.log("leap year")
            }
            else{
                console.log("not leap");
            }
        }
        else{
            console.log("leap year")
        }
    }
    else {
        console.log("not leap year");

    }



}
leap(1900)


