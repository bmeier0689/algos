// Recursive Sigma
function sumNumbers(input) {
    if(input-1<0){
        return 0;
    }
    return input + sumNumbers(input-1);
}

console.log(sumNumbers(5))
console.log(sumNumbers(2))
console.log(sumNumbers(50))

// Recursive Factorial
function factorialNumbers(input){
    if (input <= 0){
        return 1
    }
    return input * factorialNumbers(input - 1);
}
console.log(factorialNumbers(3))
console.log(factorialNumbers(6))
