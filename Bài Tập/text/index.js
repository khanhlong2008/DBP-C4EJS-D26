//A
//1
function findOppositeNumber(n, inputNumber) {
    let tmp = 0;
    tmp = (n / 2 + inputNumber) % n;
    return tmp;
}
// console.log(findOppositeNumber(10, 2))
// console.log(findOppositeNumber(10, 6))
//2
function merge2String(str1, str2) {
  var str3 = [];
  if (str1.length >= str2.length) {
    var tmp = str1.substr(str2.length, str1.length - str2.length);
    var str1 = str1.substr(0, str2.length);
  } else {
    var tmp = str2.substr(str1.length, str2.length - str1.length);
    var str2 = str2.substr(0, str1.length);
  }
  str1 = str1.split("");
  str2 = str2.split("");

  for (i = 0; i < str1.length; i++) {
    str3 = str3 + str1[i] + str2[i];
  }
  return str3 + tmp;
}
// console.log(merge2String("abc", "123"));
// console.log(merge2String("abc", "0123"));
// console.log(merge2String("abcd", "0123"));
//B
let btn = document.getElementById("quayso");
let input = document.getElementById("input");
let output = document.getElementById("output");

let numberRandom = Math.floor(Math.random() * 10)
let index = 1;
let count = 0;

btn.addEventListener("click", ()=>{ 
    if (index == 3)
    {
        alert("Bạn nhập sai quá 3 lần rồi, chúc mai mắn lần sau")
        output.innerHTML = "Số trúng thưởng là : " +numberRandom;
        input.value = "";
        return;
    }

    if (input.value == numberRandom)
    {
        alert("Chúc mừng bạn đã chiến thắng!");
        output.innerHTML = "Só trúng thưởng là : " +numberRandom;
        input.value ="";
    }
    else{
        count = 3 - index
        alert("Bạn còn " + count +" lần nữa nhé!")
        index ++
    }
})
