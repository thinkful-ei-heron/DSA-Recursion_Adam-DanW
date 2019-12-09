/* eslint-disable strict */
// Data structures and algorithms module - Checkpoint 2 - Recursive algorithms

// 1. Counting Sheep

const countSheep = function(num) {
  if (num === 0) return 'All sheep jumped over the fence';
  else return `${num}: Another sheep jumps over the fence` + '\n' + countSheep(num - 1);
};

// console.log(countSheep(3));

// 2. Power Calculator

const powerCalculator = function(base, exponent) {
  if (exponent < 0) return 'exponent should be >= 0';
  if (exponent === 0) return base;
  console.log(exponent);
  return base * powerCalculator(base, --exponent);
};

//console.log(powerCalculator(10, 3));

// 3. Reverse String

const reverseString = function(string) {
  if (string.length === 0) return string;
  else return reverseString(string.substr(1)) + string.charAt(0);
};

// console.log(reverseString('hello'))

// 4. nth Triangular Number

const nthTriNumber = function(n) {
  if (n === 1) return n;
  else return n + nthTriNumber(n - 1);
};

// console.log(nthTriNumber(6))

// 5. String Splitter

const strSplitter = function(string, toSplit, toPush = '', returnArr = []) {
  if (!string.length) {
    returnArr.push(toPush);
    return returnArr;
  }
  if (string.charAt(0) === toSplit) {
    returnArr.push(toPush);
    toPush = '';
  } else toPush = toPush + string.charAt(0);
  return strSplitter(string.slice(1), toSplit, toPush, returnArr);
};

//console.log(strSplitter('aa,bb,cc', ','));

// 6. Fibonacci

const fibonacci = function(num) {
  if (num <= 0) return 0;
  else if (num === 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
};

// console.log(fibonacci(7))

// 7. Factorial

const factorial = function(n) {
  if (n === 1) return n;
  else return n * factorial(n - 1);
};

// console.log(factorial(5))

// 8. Find a way out of the maze

const outOfMaze = function(maze, coords = [0, 0]) {
  if (maze[coords[0]][coords[1]] === 'e') {
    return '';
  }

  console.log(coords);
  //moving down
  if (
    coords[0] + 1 < maze.length &&
    (maze[coords[0] + 1][coords[1]] === ' ' || maze[coords[0] + 1][coords[1]] === 'e')
  ) {
    let path = 'D';
    return path + outOfMaze(maze, [coords[0] + 1, coords[1]]);
  }
  //moving right
  else if (
    coords[1] + 1 < maze[0].length &&
    (maze[coords[0]][coords[1] + 1] === ' ' || (maze[0].length && maze[coords[0]][coords[1] + 1] === 'e'))
  ) {
    let path = 'R';
    return path + outOfMaze(maze, [coords[0], coords[1] + 1]);
  }
  //moving up
  else if (
    coords[0] - 1 >= 0 &&
    (maze[coords[0] - 1][coords[1]] === ' ' || maze[coords[0] - 1][coords[1]] === 'e')
  ) {
    let path = 'U';
    return path + outOfMaze(maze, [coords[0] - 1, coords[1]]);
  }
  //moving left
  else if (
    coords[1] - 1 >= 0 &&
    (maze[coords[0]][coords[1] - 1] === ' ' || maze[coords[0]][coords[1] - 1] === 'e')
  ) {
    let path = 'L';
    return path + outOfMaze(maze, [coords[0], coords[1] - 1]);
  }
};

let mySmallMaze = [['', '', ' '], [' ', '*', ' '], [' ', ' ', 'e']];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//console.log(outOfMaze(maze));

// 9. All paths out of maze
const allPathsOutOfMaze = function(maze, coords = [0, 0], path) {
  if (maze[coords[0]][coords[1]] === 'e') {
    console.log(path);
    return '';
  }

  let possibilities = [];
  if (
    coords[0] + 1 < maze.length &&
    (maze[coords[0] + 1][coords[1]] === ' ' || maze[coords[0] + 1][coords[1]] === 'e')
  ) {
    let direction = 'D';
    possibilities.push(direction);
  }
  //moving right
  if (
    coords[1] + 1 < maze[0].length &&
    (maze[coords[0]][coords[1] + 1] === ' ' || (maze[0].length && maze[coords[0]][coords[1] + 1] === 'e'))
  ) {
    let direction = 'R';
    possibilities.push(direction);
  }
  //moving up
  if (
    coords[0] - 1 >= 0 &&
    (maze[coords[0] - 1][coords[1]] === ' ' || maze[coords[0] - 1][coords[1]] === 'e')
  ) {
    let direction = 'U';
    possibilities.push(direction);
  }
  //moving left
  if (
    coords[1] - 1 >= 0 &&
    (maze[coords[0]][coords[1] - 1] === ' ' || maze[coords[0]][coords[1] - 1] === 'e')
  ) {
    let direction = 'L';
    possibilities.push(direction);
  }

  let all = [];
  console.log(possibilities);
  for (let i = 0; i < possibilities.length; i++) {
    if (possibilities[i] === 'D') all.push(path + allPathsOutOfMaze(maze, [coords[0] + 1, coords[1]]));
    if (possibilities[i] === 'R') all.push(path + allPathsOutOfMaze(maze, [coords[0], coords[1] + 1]));
    if (possibilities[i] === 'U') all.push(path + allPathsOutOfMaze(maze, [coords[0] - 1, coords[1]]));
    if (possibilities[i] === 'L') all.push(path + allPathsOutOfMaze(maze, [coords[0], coords[1] - 1]));
  }
  console.log(all);
};

//allPathsOutOfMaze(maze);

// 10. Anagrams

const anagrams = function (subject) { 
    let results = [];
    if(subject.length === 1) {
        results.push(subject)
        return results ;
    }
    for (let i = 0; i < subject.length; i++) { 
        let prefix = subject[i] 
        let remainder = subject.substring(0, i) + subject.substring(i + 1) 
        let permutations = anagrams(remainder) 
        for (let j = 0; j < permutations.length; j++) { 
            results.push(prefix + permutations[j]) 
        } 
    } 

    return results
}
//console.log(findAnagrams('east'));

// 11. organizational chart

const orgChartObj = {
  Zuckerberg: {
    Schroepfer: { Bosworth: ['Steve', 'Kyle', 'Andra'], Zhao: ['Richie', 'Sofia', 'Jen'] },
    Schrage: { VanDyck: ['Sabrina', 'Michelle', 'Josh'], Swain: ['Blanch', 'Tom', 'Joe'] },
    Sandberg: {
      Goler: ['Eddie', 'Julie', 'Annie'],
      Hernandez: ['Rowi', 'Inga', 'Morgan'],
      Moissinac: ['Amy', 'Chuck', 'Vinni'],
      Kelley: ['Eric', 'Ana', 'Wes']
    }
  }
};

const printChart = function(orgCharObj, nested = '') {
  if (Array.isArray(orgCharObj)) {
    for (let i = 0; i < orgCharObj.length; i++) {
      console.log(nested + orgCharObj[i]);
    }
    nested = nested.slice(nested.length - 2);
    return;
  }

  for (const key in orgCharObj) {
    console.log(nested + key);
    nested = nested + '\xa0\xa0';
    printChart(orgCharObj[key], nested);
    nested = nested.slice(0, nested.length - 2);
  }
};

printChart(orgChartObj);

// 12. return binary representation of integer
const toBinary = function(num) {
  if (num === 0) return '';
  let binary = num % 2;
  return toBinary(Math.floor(num / 2)) + binary;
};

//console.log(toBinary(25));
