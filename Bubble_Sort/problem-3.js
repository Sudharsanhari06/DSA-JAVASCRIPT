

function bubblesort(ob){
    for(let i=0;i<ob.length;i++){
        for(let j=0;j<ob.length-i-1;j++){
            if(ob[j].age>ob[j+1].age){
                let temp=ob[j];
                ob[j]=ob[j+1];
                ob[j+1]=temp;
            }
        }
    }
    console.log(ob);


}
bubblesort([{name:"sudharsan",age:18,mark:100},{name:"sridhar",age:21,mark:99.5},{name:"bala",age:18,mark:100}]);

// console.log(ob);