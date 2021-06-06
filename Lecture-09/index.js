//1
function reverse(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverse("program"));  
// console.log(reverse("data"));
//2
function capitalize(string) {
  let split = string.split("");
  let charAt_array = string.charAt(0);
  return string.charAt(0).toUpperCase() + string.slice(1);
  //charAt lay chi muc
  //toUpperCase in hoa
  //
}
// console.log(capitalize("program developer"));
// console.log(capitalize("Computer science"));
//3
function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// console.log(unique([1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5]));
// console.log(unique([“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]));
//4
function allEven(number){
    let even = number.filter((a) => ((a % 10)%2) == 0);   
    return even;
}
// console.log(allEven([2, 4 , 6, 642, 13, 6, 863, 92]))
// console.log(allEven([12, 234, 8, 20, 7896]))
//5
function isValidDate(date_str) {
    var comp = date_str.split('/')
    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y,m-1,d);
    if (date.getFullYear() == y && date.getMonth()+1  == m && date.getDate() == d) {
      return true
    }
    return false
}
// console.log(isValidDate('30/04/2021'))
// console.log(isValidDate('29/02/2021'))
function getNextDate(date_str){
    if(isValidDate(date_str) == true ){   
        const date = new Date();
        let nextDate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
        return nextDate;
    }
    return ("00/00/0000")
}
// console.log(getNextDate('30/04/2021'))
// console.log(getNextDate('29/02/2021'))
//6

