var sideA = 5;
var sideB = 6;
var sideC = 7;

var allSides = sideA + sideB + sideC;
var p = allSides / 2;

var area = Math.sqrt( p * (p - sideA) * (p - sideB) * (p - sideC));

console.log(area);
