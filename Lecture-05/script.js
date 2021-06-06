//======================================================================Values, Types, Operators================================================================== 
// 01
// function convert(a){
//     a = a*60;
//     return a;
// }
// console.log(convert(3))
// //2
// function radiansToDegrees(a){
//     a = a*(180/Math.PI);
//     return a;
// }
// console.log(radiansToDegrees(1))
// //3
// function celsiusToFahrenheit(a){
//     a = a*1.8 + 32;
//     return a;
// }
// console.log(celsiusToFahrenheit(10))
// //4{
// function PoundToKilogram(a){
//     a = a*0.45359237;
//     return a;
// }
// console.log(PoundToKilogram(20))
// //5
// function matchHouses(a){
//     a = 5*a+1;
//     return a;
// }
// console.log(matchHouses(87))
// //6
// function sumOfCubes(a,b,c){
//     s = a**3+b**3+c**3;
//     return s;
// }
// console.log(sumOfCubes(3,4,5))
// //7
// function points(a,b){
//     a = a*2;
//     b = b*3;
//     s = a + b;
//     return s;
// }
// console.log(points(1,1))
// //8
// function getArea(a,b){
//     s = a*b;
//     return s;
// }
// console.log(getArea(2,5))
// //9
// function getPerimeter(a,b){
//     s = (a+b)*2;
//     return s;
// }
// console.log(getPerimeter(2,5))
// //10
// function isTriplet(a,b,c){
//     let max_num = (a + b + Math.abs(a - b)) / 2
//     max_num = (max_num + c + Math.abs(max_num - c)) / 2
//     console.log(max_num)
//     let min_num = (a + b - Math.abs(a - b)) / 2
//     min_num = (min_num + c - Math.abs(min_num - c)) / 2
//     console.log(min_num)
//     let mid_num = a + b + c - max_num - min_num
//     let result = max_num ** 2 == min_num ** 2 + mid_num ** 2
//     return result;
// }
// let a = 3
// let b = 4
// let c = 5
// let result  = isTriplet(a,b,c)
// console.log(result)
// ==================================================================================================================================================== 
//======================================================================Control Flows================================================================== 
//1
function special2digits(a) {
    let first = parseInt(a / 10);//math.trunc
    let last = a % 10;
    return (first + last + first * last == a)
    // let sum = first + last;
    // let product = first * last;
    // let result = (a == sum + product);
    // return result

}
// a = 19
// result = special2digits(a)
// console.log(special2digits(99))
//2
function isNarcissistic(s) {
    let n = 1;
    let count = 0;
    while (s / n > 1) {
        n *= 10;
        count++;
    };
    let sum = 0, temp = s;
    while (temp) {
        sum += Math.pow(temp % 10, count);
        temp = Math.floor(temp / 10);
    };
    return sum === s;
};
//  console.log(isNarcissistic(153));
//  console.log(isNarcissistic(1634));
//  console.log(isNarcissistic(1433));
//  console.log(isNarcissistic(342));
//3
function circle(a, b) {
    this.width = a;
    this.height = b;
    // area method
    this.area = function () {
        return Math.PI * this.width * this.height;
    };
    // perimeter method
    this.perimeter = function () {
        return 2 * Math.PI * this.height * this.width;
    };
}
// c = new circle(2,3,"area");
// console.log(c.area().toFixed(2));
// c = new circle(8,6,"perimeter");
// console.log(c.perimeter().toFixed(2));
//4
function areaShape(a, h) {
    this.base = a;
    this.height = h;
    //area triangle
    this.triangle = function () {
        return (1 / 2) * this.base * this.height;
    };
    //area parallelogram
    this.parallelogram = function () {
        return (this.base * this.height);
    };
}
// c = new areaShape(8,6,"parallelogram");
// console.log(c.parallelogram());
// c =new areaShape(2,3,"triangle");
// console.log(c.triangle());
//5
// function pHName(a){
//     if(a>7){
//         let a = "alkaline" ; 
//         return a ;
//     }else if(a<7){
//         let a ="acidic";
//         return a;
//     }else if(a==7){
//         let a = "neutral";
//         return a
//     }
// }
// console.log(pHName(8))
// console.log(pHName(5))
// console.log(pHName(7))
// ==================================================================================================================================================== 
//======================================================================Loops========================================================================== 
//1
function rightAngledTriangle(a) {
    a = parseInt(a);
    for (let i = 0; i < a; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("#");
        }
        document.write("<br/>");
    }
}
// console.log(rightAngledTriangle(4))
// console.log(rightAngledTriangle(6))
//2
function rightAngledTriangle(a) {
    a = parseInt(a);
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a; j++) {
            if (j <= a - i) {
                document.write("&nbsp&nbsp");
            } else {
                document.write("#");
            }
        }
        document.write("<br/>");
    }
}
// console.log(rightAngledTriangle(4))
// console.log(rightAngledTriangle(6))
//3
function fizzBuzz(a) {
    for (let i = 1; i <= a; i++) {
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(15));
//4
function is_perfect(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number) {
        return true;
    }

    return false;

}
console.log(is_perfect(496))
//5
// function AbundantNumber(a){
//     let sum = 0;
//     for (let i = 1; i <= Math.sqrt(a); i++) {
//         if (a % i == 0) {
//             if (a / i == i)
//                 sum = sum + i;
//             {
//                 sum = sum + i;
//                 sum = sum + (a / i);
//             }
//         }
//     }
//     sum = sum - a;
//     if (sum > a) {
//         return true;
//     }
//     else
//         return false;
// }
// console.log(AbundantNumber(27))
// console.log(AbundantNumber(24))
// console.log(AbundantNumber(97))
// console.log(AbundantNumber(100))
