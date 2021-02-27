// forEach
[1, 2, 3].forEach((item, index) => {
    console.log(item, index);
});


// map
//
// takes array item, does something to it and puts it back into a new array with same index

const map = [1, 2, 3].map(item => {
    return item * 2;
});

console.log(map);


// filter
//
// check item against logic, if false it removes from array

const evens = [1, 2, 3, 4, 5, 6].filter(item => {
    return item % 2 === 0;
});

console.log(evens);


// reduce
//
// take array, do something and pass result to next item

const sum = [1, 2, 3].reduce((result, item) => {
    return result + item;
}, 0); // 0 is what result should be on first loop, if nothing result will be the first index

console.log(sum);


// some
//
// does any item in array meet the condition, returns true or false

const some = [1, 2, 3, -1, 4].some(item => {
    return item < 0;
});

console.log(some);


// every
//
// does every item in array meet the condition, returns true of false

const every = [1, 2, 3, -1, 4].every(item => {
    return item < 0;
});

console.log(every);

// find
//
// search for specific item in array, returns it. If false returns undefined.

const object = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = object.find(item => {
    return item.id === 'b';
});

console.log(found);


// find index
//
// search for specific item in array, returns index. If false returns undefined.

const object2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = object2.findIndex(item => {
    return item.id === 'b';
});

console.log(foundIndex);

// indexOf
//
// 
const findIndexOf = [1, 2, 3, 4, 5].indexOf(2);

console.log(findIndexOf);
