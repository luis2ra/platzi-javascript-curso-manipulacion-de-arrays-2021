const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

console.log("-".repeat(7));

/** 
 * 
 * Tener en cuenta que map si modifica el array original cuando sus elementos son Objetos!
 * Esto NO sucede con los datos primitivos, SI sucede cuando son Objetos!
 */

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

console.log("-".repeat(7));

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);
