let revennue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(revennue)

// revennue ="dasdds"
// console.log(revennue)
// acccess tới từng phần tử trong mảng
// revennue[2] = "hello my friend"
// console.log(revennue[2] * 10)
// console.log(revennue)
// delete,insert
revennue.unshift("i am head");
revennue.push("i am tail");
// console.log(revennue)

// delete
revennue.shift();
revennue.pop();
// console.log(revennue)
// console.log(revennue.length)
// hàm cắt mảng
//slice (start;end)
//vd 100 slice(0;10)
// slice(0; 23456789)
function insertAt(array, value, index) {
  let head = array.slice(0, index);

  let tail = array.slice(index, array.length);
  let full = head.concat([value]).concat(tail);
  return full;
  //  console.log(head)
  //  console.log(tail)
}
function deleteAt(array, index) {
  let head = array.slice(0, index);
  let tail = array.slice(index, array.length);
  let full = head.concat([value]).concat(tail);
  //concat có ý nghĩa là nối mảng
}
// revennue = insertAt(revennue, 2, 3)
// console.log(revennue)
// sort của js là chạy theo chuổi nên sử dụng công thức ((a,b)=> a-b)
//=====================================================================================================
//1 Pocket Monster Lover
let Pokemon = [
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
];
// console.log(Pokemon)
// Pokemon.pop("Rattata")
// Pokemon.unshift('Meow')
// console.log(Pokemon)
//2 Outlier Number
function findOutlier(number) {
  let even = number.filter((a) => a % 2 === 0); //lọc ra mảng số chẳn(even)
  let odd = number.filter((a) => a % 2 !== 0); //lọc ra mảng số lẻ(odd)
  return even.length === 1 ? even[0] : odd[0];
}
// console.log(findOutlier([2,4,3]));
//filter
//3 Return Types
function arrayValuesTypes(array) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    let typeOfElement = typeof array[i];
    arrayResult.push(typeOfElement);
  }
  return arrayResult;
}
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
//4 Unique element
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
// let a =([1, 2, 3], [100, 2, 1, 10]);
// let a = ([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// let unique = a.filter(onlyUnique);
// console.log(unique);
//9 Diff Two Arrays
function diffArray(arr1, arr2) {
  let new_arr = [];
  let diff = [];
  for (let i = 0; i < arr1.length; i++) {
    new_arr[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (new_arr[arr2[i]]) {
      delete new_arr[arr2[i]];
    } else {
      new_arr[arr2[i]] = true;
    }
  }
  for (let k in new_arr) {
    diff.push(k);
  }
  return diff;
}
//10 Tuck in Array
function tuckIn(ar1, ar2) {
  let arr = ar1.concat(ar2);
  //concat : chen mang ,nhung vao dau mang
  arr.sort((a, b) => a - b);
  return arr;
}
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
//11
