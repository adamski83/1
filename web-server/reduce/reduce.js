const arr1 = [3, 5, 4, 3, 6, 2, 3, 4, ];
const arr2 = [...arr1];
const result = arr1.reduce((acc, cur) => acc + cur, 0);
console.log(result);


const fruits = ['apple', 'banana'];
const res2 = arr2.push.apply(arr1, fruits);
console.log(res2);