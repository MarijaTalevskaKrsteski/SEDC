function findType(parametar) {
    return typeof parametar;

    //ova moze i vaka bez return
    //console.log(`The typeof is: ${(typeof parametar)}`);
}

console.log(`The typeof is: ${(findType(new Date()))}`);

console.log(`The typeof is: ${(findType(true))}`);

console.log(`The typeof is: ${(findType(2023))}`);

console.log(`The typeof is: ${(findType("Marija"))}`);

let x;
console.log(`The typeof is: ${(findType(x))}`);

// findType(new Date());
// findType(true);
// findType(2023);
// findType("Marija");
// findType(x);