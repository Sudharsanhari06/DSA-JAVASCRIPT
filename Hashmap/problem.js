let m=new Map();
console.log(m);

// add the values;
// key and value; 
// let arr=[10,20,30,2,2,23];

m.set(10,true);
m.set(10,100);
m.set("sam","18");
m.set(10.4,true);
// for(let i=0;i<m.size;i++){
// console.log(m.values);
// }

for(i of m.values()){
    console.log(i);
}
m.delete("sam");
console.log(m);



// console.log(m.get(10));
console.log("end");


