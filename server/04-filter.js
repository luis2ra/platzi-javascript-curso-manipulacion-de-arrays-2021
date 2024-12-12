const words = ['spray', 'limit', 'elite', 'exuberant'];

// sin filter
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );

// con filter
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );

// otro ejemplo usando filter
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
    {
      customerName: "Nicolas",
      total: 2322,
      delivered: false,
    },
  ];

const rta2 = orders.filter(item => item.delivered)
console.log('rta2', rta2);

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

// ejemplo de un buscador usando filter
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

// console.log(search('Nico'));
console.log(search('hsdjkfhdsj'));