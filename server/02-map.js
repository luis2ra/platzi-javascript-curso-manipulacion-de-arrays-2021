const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);

console.log("-".repeat(7));

const array = ['a', 'bb', 'ccc'];
const test = array.map(item => item.length);
console.log(test);