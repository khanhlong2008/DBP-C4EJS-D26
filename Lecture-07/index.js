let emloyee = {
  name: "long",
  salary: "20tr",
  falcuty: "Xschool",
  family: {
    dad: "ba long",
    mon: "me long",
    sis: "em long",
  },
};
//arry truy xuất dữ liệu bằng chỉ mục Index
//object truy xuất dữ liệu bằng name của property

// console.log(emloyee.family.dad)
let emps = [
  {
    name: "long",
    salary: "20tr",
    falcuty: "Xschool",
    family: {
      dad: "ba long",
      mon: "me long",
      sis: "em long",
    },
  },
  {
    name: "loc",
    salary: "20tr",
    falcuty: "Xschool",
    family: {
      dad: "ba long",
      mon: "me long",
      sis: "em long",
    },
  },
  {
    name: "thanh",
    salary: "20tr",
    falcuty: "Xschool",
    the_lengend_of_zelda: {
      dad: "ba long",
      mon: "me long",
      sis: "em long",
    },
  },
];
let key = "the_lengend_of_zelda";
// console.log(emps[0].name);
// console.log(emps[2].the_lengend_of_zelda)
// console.log(emps[2][key])

// thêm và xóa object
emloyee["role"] = "boss";
// console.log(emloyee);
delete emloyee["role"];
// console.log(emloyee);
//1. Pocket Monster Lover 2
let pokemon = {
  name: "Pikachu",
  stats: {
    hp: 100,
    level: 50,
    attack: 86,
    spattack: 150,
    speed: 5000000,
    belongTo: "Red",
  },
};
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"];

pokemon.stats.speed = 60;
pokemon.skill = pikachuSkill;
delete pokemon.stats.belongTo;
// console.log(pokemon)
//2. Gaming
let inventory = {
  gold: 500,
  pouch: ["flint", "twine", "gemstone"],
  backpack: ["xylophone", "dagger", "bedroll", "bread loaf"],
};

inventory.pocket = ["seashell", "strange berry", "lint"];
inventory.backpack = []
  .concat(inventory.backpack.slice(0, 1))
  .concat(inventory.backpack.slice(2));
inventory.gold = inventory.gold + 50;
delete inventory.pouch;
// console.log(inventory);
//3. Profile Lookup
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        //hàm hasOwnProperty lấy ra giá trị của property
        return contacts[i].prop;
      } else return "No such property";
    }
  }
  return "No such contacts";
}
// let result = lookUpProfile("Akira", "likes");
// console.log(result);
//4. Get Sum of People's Budget
function getBudgets(People) {
  let sum = 0;
  for (let i = 0; i < People.length; i++) {
    sum += People[i].budget;
  }
  return sum;
}
// let result = getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 },
// ]);
// console.log(result);
//5. Distance Between Two Points
function getDistance(pointA, pointB) {
  let sum_of_square = (pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2;
  return sum_of_square ** 0.5;
}
//let result = getDistance({ x: -2, y: 1 }, { x: 4, y: 3 });
// console.log(result);
//6.Printer Levels
function inkLevels(inks) {
  let min = 1000000;
  for (let key in inks) {
    if (inks[key] < min) {
      min = inks[key];
    }
  }
  return min;
}
// let result = inkLevels({
//   cyan: 23,
//   magenta: 12,
//   yellow: 10,
// });
// console.log(result);
//7. International Greetings
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(person) {
  if (GUEST_LIST.hasOwnProperty(person)) {
    return "Hi! I'm " + person + ",and I'm from " + GUEST_LIST[person] + ".";
  } else {
    return "Hi I'm a guest";
  }
}
// console.log(greeting("Randy"))
//8. Return the Objects Keys and Values
function keysAndValues(obj) {
  let arrayResult = [];
  
  let objectKeys = [];
  for (let objectKey in obj) {
    objectKeys.push(objectKey);
  }
  let objectValues = [];
  for (let objectKey in obj) {
    objectValues.push(obj[objectKey]);
  }
  arrayResult.push([objectKeys], [objectValues]);
  return arrayResult;
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))

//9. Online Shopping
function freeShipping(obj) {
  let sum = 0;
  for (let monney in obj) {
    if (obj.hasOwnProperty(monney)) {
      sum += parseFloat(obj[monney] || 0);
      if (sum > 50.0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
// console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
// console.log(freeShipping({ "Flatscreen TV": 399.99 }));
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));
//10. Paint the Walls
function time(rate,people,walls){
  let result = (rate.minute * rate.people * walls) / (rate.walls * people)
  return result;
}
const rate = {
  people:4,
  walls: 9,
  minute:63,
}
// console.log(time(rate,7,4))