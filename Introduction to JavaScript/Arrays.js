const nums=[1,2,3,4,5];
const allNums=[nums,6,7,8,9,10];
console.log(allNums);
console.log("-----------------------------------------");
const x=["Ali","Kaan"];
const y=["Kerim","Kaan","Canan","Tan"];
const mix=x+" / "+y;
console.log(mix);
console.log("-----------------------------------------");
const allxy=[x,y];
console.log(allxy);
console.log("-----------------------------------------");
const numbers=[1,1,1,2,2,2,3,4,5,6,7,7,8,9];
const uniqueNumbers1=[new Set(numbers)];
console.log(uniqueNumbers1);
console.log("-----------------------------------------");
const numberx=[1,1,1,2,2,2,3,4,5,6,7,7,8,9];
const uniqueNumbers2=[...new Set(numberx)];
console.log(uniqueNumbers2);
