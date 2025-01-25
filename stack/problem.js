class stack {
    constructor() {
        this.arr = [];
    }
    push(num) {
        this.arr.push(num);
    }
    pop(){
        this.arr.pop();
    }
    peek() {
        let p = this.arr[this.arr.length-1];
        return p;
    }

}
// creating object for stack class
let mystack = new stack();
mystack.push(20);
console.log(mystack.peek());
mystack.pop();
console.log(mystack.peek());
