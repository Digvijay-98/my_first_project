const employees = [
    {
        name: "digvijay",
        task: [
            { title: "task1", completed: true },
            { title: "task2", completed: true },
            { title: "task3", completed: true },

        ]
    },
    {
        name: "Ingole",
        task: [
            { title: "task1", completed: true },
            { title: "task2", completed: true },
            { title: "task3", completed: true },

        ]
    },

    {
        name: "Hanuman",
        task: [
            { title: "task1", completed: true },
            { title: "task2", completed: true },
            { title: "task3", completed: true },

        ]
    },

];

const newTask = { title: "Task3", completed: true };

const updatedEmployees = employees.map(emp => ({
  ...emp,
  task: [...emp.task, { ...newTask }]
}));

// console.log(updatedEmployees);

// function addTask() {
//   const task4 = [{ title: "task4", completed: true }];
//   employees[0].task.push(task4[0]);
//   return task4;
// }

employees.forEach(employee => {
  employee.task.push({
    title: "task4",
    completed: true
  });
});

employees.push({
    name: "om",
    task: [
    { title: "Task1", completed: true },
    { title: "Task2", completed: true },
    { title: "Task3", completed: true },
  ]
})


const result = [];          

for (const employee of employees) {
    let count = 0;

    for (const task of employee.task) {
        if (task.completed === true) {
            count += 1;
        }
    }

    result.push({ name: employee.name, count });
}

console.log(result);







// 2nd assignments

const orders = [
  {
    id: 1,
    customer: "Amit",
    items: [
      { name: "Phone", price: 20000 },
      { name: "Charger", price: 1000 }
    ]
  },
  {
    id: 2,
    customer: "Neha",
    items: [
      { name: "Laptop", price: 50000 }
    ]
  }
];
const orderTotals = orders.map(order => {
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return {
    id: order.id,
    customer: order.customer,
    totalValue: total
  };
});

// console.log(orderTotals);
// Output:
// [
//   { id: 1, customer: "Amit", totalValue: 21000 },
//   { id: 2, customer: "Neha", totalValue: 50000 }
// ]

const totalRevenue = orders.reduce((total, order) => {
  const orderSum = order.items.reduce((sum, item) => sum + item.price, 0);
  return total + orderSum;
}, 0);

// console.log(totalRevenue);
// Output: 71000


const mostExpensiveProduct = orders
  .flatMap(order => order.items)
  .reduce((max, item) => (item.price > max.price ? item : max));

// console.log(mostExpensiveProduct);
// Output: { name: "Laptop", price: 50000 }

function addOrder(customerName, itemsList) {
  const newOrder = {
    id: orders.length + 1,
    customer: customerName,
    items: itemsList
  };
  orders.push(newOrder);
}

// Example usage:
addOrder("Rahul", [
  { name: "Headphones", price: 3000 },
  { name: "Mouse", price: 800 }
]);

// console.log(orders);



const ordersByCustomer = orders.reduce((grouped, order) => {
  const name = order.customer;
  if (!grouped[name]) {
    grouped[name] = [];
  }
  grouped[name].push(order);
  return grouped;
}, {});

// console.log(ordersByCustomer);
// Output:
// {
//   Amit: [ { id: 1, customer: "Amit", items: [...] } ],
//   Neha: [ { id: 2, customer: "Neha", items: [...] } ]
// }
