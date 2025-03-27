/*Reverse a String*/
function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverseString("word")); // Output: "drow"


/*Count Characters*/
function countCharacters(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count = count + 1;
    }
    return count;
}

console.log(countCharacters("hello")); // Output: 5

/*Capitalize Words*/
function capitalizeWords(sentence) {
    var words = sentence.split(" ");
    var capitalized = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var firstLetter = word.charAt(0).toUpperCase();
        var rest = word.slice(1);
        capitalized = capitalized + firstLetter + rest + " ";
    }

    return capitalized.trim(); 
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

/*Find Maximum and Minimum*/
function findMaximum(arr) {
    var max = arr[0]; // 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

function findMinimum(arr) {
    var min = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    return min;
}

// Example
var numbers = [4, 2, 9, 1, 5];
console.log("Max:", findMaximum(numbers)); // 9
console.log("Min:", findMinimum(numbers)); // 1

/*Sum of Array*/
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]; 
    }
    return sum;
}

// Example
console.log("Sum:", sumArray([1, 2, 3, 4])); // 10

/*Filter Array*/
function filterGreaterThanFive(arr) {
    var result = []; // Empty array to store filtered values

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            result.push(arr[i]); // Add to result if condition is true
        }
    }

    return result;
}

// Example
console.log(filterGreaterThanFive([3, 7, 2, 9, 4])); // [7, 9]

/*Factorial*/
function factorial(n) {
    var result = 1;

    for (var i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

// Example
console.log("Factorial of 5:", factorial(5)); // 120

/*Prime Number Check*/
function isPrime(n) {
    if (n <= 1) {
        return false; 
    }

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }

    return true;
}

// Example
console.log("Is 7 prime?", isPrime(7)); // true
console.log("Is 10 prime?", isPrime(10)); // false

/*Fibonacci Sequence */
function FibonacciSequence(n) {
    var sequence = [];

    for (var i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            var next = sequence[i - 1] + sequence[i - 2];
            sequence.push(next);
        }
    }

    return sequence;
}

// Example
console.log(FibonacciSequence(7)); // Output: [0, 1, 1, 2, 3, 5, 8]








