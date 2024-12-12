const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
console.log("-".repeat(7));

const numbers = [1, 30, 4, 21, 100000];
// numbers.sort();
numbers.sort((a,b) => a - b);
// numbers.sort((a,b) => b - a);
console.log(numbers);
console.log("-".repeat(7));

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
console.log("-".repeat(7));

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
orders.sort((a,b) => b.total - a.total);
console.log(orders);