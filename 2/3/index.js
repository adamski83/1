const [, , first, second, thrid] = process.argv;
let arr = [Number(first), Number(second), Number(thrid)]

function myFunction(...arr) {
    for (const a of arr) {}
};

console.log(Math.max(...arr));