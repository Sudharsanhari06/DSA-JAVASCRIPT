// Take 2 numbers as inputs and find their HCF and LCM.

function lcmandhcf(num1,num2){
    let min=num1<num2?num1:num2;
    let mul=num1*num2;
    for(let i=1;i<=min;i++){
        if(num1%i==0 && num2%i==0){
            var hcf=i;
        }
    }
    console.log(hcf)
    console.log(mul/hcf)
}
lcmandhcf(40,56)




