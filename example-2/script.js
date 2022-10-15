function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log("outer Value: ", outerValue);
        console.log("inner Value: ", innerValue);
    }
}

const someFunction = outerFunction("hesham");

someFunction("Naglaa");

// when you have a function defined in another function
// like this. this inner function has access to the variables
// and scope of the outer function
// even if the outer function finishes executing.
