const haystack = ['hay', 'needle', 'stack', 'farm'];

const findNeedle = (needle, haystack) => {
    return haystack.indexOf(needle);
}

console.log(findNeedle('needle', haystack));

/////////////

const str = 'Hello world, welcome to the universe.';
const n = str.includes("world");

console.log(n);


console.log(str.match(/\b(\w+)\b/g));

/////////////