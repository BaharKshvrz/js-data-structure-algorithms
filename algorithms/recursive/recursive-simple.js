let counter = 0;

function inception() {
    if (counter > 0) {
        return "Done!"
    }
    counter++;
    return inception();
}

console.log(inception());  // undefined