//                          full stack development day5 task


// 1. Do the below the programs anonymous and IIFE function

// 1. a ) print odd numbers in array

// source code :  anonymous function 

var arr = [1,2,3,4,5,6];

var odd = function(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(odd(arr))

// output :
   
//        1, 3, 5 

// _____________________________________________________________

// source code:  IIFE function

( function(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2!= 0){
            result.push(arr[i]);
        }
    }
    console.log (result);
} )([1,2,3,4,5,6])

// output :
   
//        1, 3, 5 

// __________________________________________________________________________________________________________________________


// 1. b ) convert all the stirng to title caps in a string array

// source code :  anonymous function

var str = ["welcome to js Learning"]
var flc = function (str) {
    var caps = str.toString();
    caps = caps.toLowerCase().split(" ");
    for (var i = 0; i < caps.length; i++) {
      caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
    }
    return caps.join(" ");
  }
  console.log(flc(str));

// output :

//        Welcome To Js Learning

// _____________________________________________________________

// source code :  IIFE function

(function(str){
    var caps = str.toString();
    caps = caps.toLowerCase().split(" ");
    for (var i = 0; i < caps.length; i++) {
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
    }
    console.log (caps.join(" "));
})(["welcome to js learning"])

// output :

//        Welcome To Js Learning

// __________________________________________________________________________________________________________________________


// 1. c ) sum of all numbers in array

// source code :  anonymous function

var values = [1,2,3,4,5,6]

var sum = function(values){
    var result = 0;
    for(var i = 0; i < values.length; i++){
        result = result + values[i];
    }
    return result;
}
console.log(sum(values));

// output :

//        21

// _____________________________________________________________

// source code :  IIFE function

(function(sum){
    var result = 0;
    for(var i = 0; i < values.length; i++){
        result = result + values[i];
    }
    console.log (result);
})([1,2,3,4,5,6])

// output :

//        21
       
// __________________________________________________________________________________________________________________________


// 1. d ) Return all the prime numbers in array 

// source code :  anonymous function

var arr = [1,2,3,4,5,6,7,8,9,10];

var prime = function(arr){
    var result=[]
    for (var i = 0; i < arr.length; i++) {
        var flag = 0;
   
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
   
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(prime(arr))

// output :

//        2, 3, 5, 7

// _____________________________________________________________

// source code :  IIFE function

(function(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var flag = 0;
       
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
       
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    console.log (result);
})([1,2,3,4,5,6,7,8,9,10])

// output :

//        2, 3, 5, 7

// ____________________________________________________________________________________________________________

// 1. e ) return all palindrome in a array

// source code :  anonymous function

var arr = ["malayalam","hi","dad","welcome","mom"];

 var palindrome = function(arr) {
    var result = arr.slice(0, Math.ceil(arr.length/2));
    var result_reverse = arr.slice(Math.floor(arr.length/2)).split('').reverse().join('');

    return result === result_reverse;
}

var get_palindrome = function (arr) {
    return arr.filter(palindrome);
}
console.log(get_palindrome(arr));

// output :

//     ['malayalam', 'dad', 'mom']

// _____________________________________________________________

// source code :  IIFE function

(function(arr) {
    let newarray =[];
    for(var i = 0; i < arr.length; i++) {
    var result = arr[i].slice(0);
    var result_reverse = arr[i].split('').reverse().join('');
     if(result == result_reverse)
     {
         newarray.push(result);
     }
    }
    console.log(newarray);
}
)( ["malayalam","hi","dad","welcome","mom"]);

// output :

//     ['malayalam', 'dad', 'mom']

// __________________________________________________________________________________________________________________________

// 1. f ) Return mediam of two stored array of the same size

// source code :  anonymous function 

var arr1 = [1,2,3,4,5,6];
var arr2 = [7,8,9,10,11,12];

var median = function (arr1, arr2) {

    var result = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    var half = result.length / 2 | 0;
    if (result.length % 2){
        return result[half];
    } 
    return (result[half] + result[half - 1]) / 2;
}
console.log(median(arr1, arr2));

// output :

//        6.5

// _____________________________________________________________

// source code :  IIFE function

(function (arr1, arr2) {
    var result = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    var half = result.length / 2 | 0;
    if (result.length % 2){
        return result[half];
    }
    console.log ((result[half] + result[half - 1]) / 2);
})
([1,2,3,4,5,6],[7,8,9,10,11,12])

// output :

//        6.5

// ____________________________________________________________________________________________________________

// 1.g ) remove duplicate from an array

// source code :  anonymous function

var arr=["welcome","to","to","welcome","learing"];  
var duplicate = function (arr){  
return [...new Set(arr)]  
}  
console.log(duplicate(arr))

// output :

//         ['welcome', 'to', 'learing']

// _____________________________________________________________

// source code :  IIFE function

(function(arr){
    console.log( [...new Set(arr)]);
})(["welcome","to","to","welcome","learing"])

// output :

//         ['welcome', 'to', 'learing']

// ____________________________________________________________________________________________________________

// 1. h ) rotate an array by k times 

// source code :  anonymous function

var values = [1,2,3,4,5,6];
var k = 2;

var  rotate = function(values, k) {

    for (var i = 0; i <=k; i++) {
        values.unshift(values.pop());
    }
 
    return (values.toString());
}
console.log(rotate(values, k));

// output :

//        4,5,6,1,2,3

// _____________________________________________________________

// source code :  IIFE function

(function(values,k){
    for (var i = 0; i <=k; i++) {
        values.unshift(values.pop());
    }
    console.log(values.toString());
})([1,2,3,4,5,6],2)

// output :

//        4,5,6,1,2,3

// ____________________________________________________________________________________________________________

// 2. Do the below the programs arrow function

// 2. a ) print odd numbers in array

// source code:  arrow function

var odd = (arr)=>{
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2!= 0){
            result.push(arr[i]);
        }
    }
    return result;
} 
console.log(odd([1,2,3,4,5,6]))

// output :
   
//        1, 3, 5 

// ____________________________________________________________________________________________________________

// 2. b ) convert all the stirng to title caps in a string array

// source code :  arrow function

var flc = (str)=>{

    var caps = str.toString();
    caps = caps.toLowerCase().split(" ");
    for (var i = 0; i < caps.length; i++) {
        caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1);
    }
    return caps.join(" ");
}
console.log(flc(["welcome to js learning"]))

// output :

//        Welcome To Js Learning

// ____________________________________________________________________________________________________________________________

// 2. c ) sum of all numbers in array

// source code :  arrow function

var sum = (values)=>{
    var result = 0;
    for(var i = 0; i < values.length; i++){
        result = result + values[i];
    }   
    return result;
}
console.log(sum([1,2,3,4,5,6]))

// output :

//        21

// _______________________________________________________________________________________________________________________

// 2. d ) Return all the prime numbers in array

// source code :  arrow function

var prime = (arr)=>{
    var result = [];
    for (var i = 2; i < arr.length; i++) {
        var flag = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));

// output :

//        2, 3, 5, 7

// ___________________________________________________________________________________________________________________________

// 2. e ) return all palindrome in a array

// source code :  arrow function

var arr = ["malayalam","hi","dad","welcome","mom"];

 var palindrome = (arr) =>{
    var result = arr.slice(0, Math.ceil(arr.length/2));
    var result_reverse = arr.slice(Math.floor(arr.length/2)).split('').reverse().join('');

    return result === result_reverse;
}

var get_palindrome = (arr)=> {
    return arr.filter(palindrome);
}
console.log(get_palindrome(arr));

// output :

//     ['malayalam', 'dad', 'mom']

// ___________________________________________________________________________________________________________________________