const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

letters.forEach(item => console.log('forEach', item))

// console.log("-".repeat(7));

// const test = letters.forEach(item => item === 'b');
// console.log('test: ', test);  // esto arroja undefined, realmente el metodo no filtra