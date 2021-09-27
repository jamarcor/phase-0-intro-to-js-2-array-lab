// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const coolCat = [...cats,];
    coolCat.push(name);
    return coolCat;
}

function prependCat(name) {
    const dumbCat = [...cats,];
    dumbCat.unshift(name);
    return dumbCat
}

function removeLastCat(name) {
    const coolCat = [...cats,];
    coolCat.pop(name);
    return coolCat;
}

function removeFirstCat(name) {
    const dumbCat = [...cats,];
    dumbCat.shift(name);
    return dumbCat;
}