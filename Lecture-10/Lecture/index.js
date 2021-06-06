// console.log(document)
// document.write("lorem ipsum")
// let select = document.getElementById("select_id")
//css
// * dùng cho tất cả
// # dùng cho id
// . dùng cho class
// để không dùng cho tag
// let options = document.getElementsByTagName("option")
// let option_w_query = document.querySelector("option")
// let options_w_query = document.querySelectorAll("option")
// console.log(options)
// console.log(option_w_query)
// console.log(options_w_query)
// let borders = document.querySelectorAll("#select_id")
// console.log(borders)
// let radios = document.querySelectorAll("input[type=radio]")
// console.log(radios)
// window.addEventListener("click", () => {
//   console.log("you just clicked");
// });
let button = document.querySelector("input[type=button]");
let name = document.querySelector("input[type=text");
let output = document.querySelector("#output");
console.log(button);
button.addEventListener("click", () => {
  //   console.log(name.value);
  //   console.log(select.value);
  if (name.value != "") {
    output.innerHTML = `Your name is ${name.value}, your ${select.value}`;
  }
});
