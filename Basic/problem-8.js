// Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)
function arithmeticoperator(num1,num2,op){

    if(op=="+"){
        console.log("Addition :"+ (num1+num2));
    }
    else if(op=="-"){
        console.log("Subtraction :"+ (num1-num2));

    }
    else if(op=="*"){
        console.log("Multiplication :"+ (num1*num2));

    }
    else if(op=="/"){
        console.log("Division :"+(num1/num2));

    }
    
}
arithmeticoperator(5,2,"/")
