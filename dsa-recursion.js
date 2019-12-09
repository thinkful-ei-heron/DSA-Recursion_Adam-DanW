// Data structures and algorithms module - Checkpoint 2 - Recursive algorithms

// 1. Counting Sheep

const countSheep = function(num) {
    if (num === 0) 
        return 'All sheep jumped over the fence'
    else 
        return `${num}: Another sheep jumps over the fence` + '\n' + countSheep(num - 1)
}

// console.log(countSheep(3));


// 2. Power Calculator

// const powerCalculator = function(base, exponent) {
//     if (exponent < 0)
//         return 'exponent should be >= 0'
//     else
//         return base * powerCalculator()
// }


// 3. Reverse String

const reverseString = function(string) {
    if (string.length === 0)
        return string
    else
        return reverseString(string.substr(1)) + string.charAt(0)
}

// console.log(reverseString('hello'))


// 4. nth Triangular Number

const nthTriNumber = function(n) {
    if (n === 1)
        return n
    else 
        return n + nthTriNumber(n-1)
}

// console.log(nthTriNumber(6))


// 5. String Splitter

const strSplitter = function(string) {

}


// 6. Fibonacci

const fibonacci = function(num) {
    if (num <= 0)
        return 0;
    else if (num === 1)
        return 1
    else
        return fibonacci(num-1) + fibonacci (num-2)
}

// console.log(fibonacci(7))


// 7. Factorial

const factorial = function(n) {
    if (n === 1)
        return n
    else
        return n * factorial(n-1)
}

// console.log(factorial(5))


// 8. Find a way out of the maze

const outOfMaze = function() {

}