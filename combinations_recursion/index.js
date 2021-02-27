const findAllCombinations = (array) => {
    let result = [];
  
    const findArrangements = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        arr.forEach((e, i) => {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          findArrangements(curr.slice(), m.concat(next))
       });
     }
   }

   findArrangements(array);

   return result;
}

console.log(findAllCombinations([1, 2, 3]));