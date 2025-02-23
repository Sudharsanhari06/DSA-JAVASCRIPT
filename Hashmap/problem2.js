let myArray=[1,2,3,3,3,4,5];
let mySet=new Set(myArray);
// add anything in set array,string ,number, object
mySet.add({sh:"sudharsan"});
// delete the one key;
mySet.delete(2)
// clear the set
// mySet.clear();

// like contains is use the array now the set is use the has return the boolean value;
console.log(mySet.has(2));

// len of the set;
console.log(mySet.size);


let uniqueArray=[...mySet];

console.log(uniqueArray);
// console.log(myArray);
// console.log(mySet);


// maps in js















