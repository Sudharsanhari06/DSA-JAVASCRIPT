let s = "hello everyone";
let arr=s.split(' ');
let news="";
for(let i=arr.length-1;i>=0;i--){
    news+=arr[i]+" ";
}
console.log(news.slice(0,news.length-1))