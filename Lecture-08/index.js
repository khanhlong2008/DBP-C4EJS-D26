let myArray = [];
for (let i=0; i<10; i++){
    myArray.push(Math.ceil(Math.random()*50))
}
let newArray = [];
// function f(x){
//     return x*2;
// }
// newArray = myArray.map((element,index,array)=>{
//     console.log(index,element,array)
//     return element*2
// })
newArray = myArray.filter((element,index,array)=>{
    // console.log(index,element,array)
    return element%2 ==0
})

// for (let i=0; i<myArray.length;i++){
//     newArray.push(f(myArray[i]))
// }
// console.log(myArray)
console.log(newArray)

