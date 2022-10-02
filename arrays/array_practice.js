var myArr = [];

myArr[0] = 42;
myArr[1] = "hi";
myArr[2] = true;
myArr[myArr.length+1] = 2;

console.log(myArr.length);
console.log(myArr);

myArr[0] = 101;
myArr[3] = "MG";

console.log(myArr);

myArr.pop();
console.log(myArr.length);

myArr.push("dat");
console.log(myArr.length);