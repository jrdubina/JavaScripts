//List out Credit Card Numbers into Array
var ccNumbers = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];

//Establish Variables
var newCCNumbers = [];
var largest=[0];
var ccIndex=[];

//For Loop removing dashes and adding each credit card digits up. Placing in newCC Array
function returnHighestSum(arr) {
 
 for(i = 0; i < ccNumbers.length; i++) {
   var splitNumbers = ccNumbers[i].replace(/-/g, '').split("").map(Number);

   var addedTogether = splitNumbers.reduce(function (a,b) {
     return a + b;
   }, 0);
   
   newCCNumbers.push(addedTogether);
 }
 return newCCNumbers;
}

//retirm newCCNumbers Array
returnHighestSum(newCCNumbers);

//For Loop finding what the largest number is
for(var i=0;i<newCCNumbers.length;i++){
  var comp=(newCCNumbers[i]-largest[0])>0;
     if(comp){
      largest =[];
      largest.push(newCCNumbers[i]);
      }
}

//For Loop finding which indexes have the largest number 
for(var i=0;i<newCCNumbers.length;i++){
   var comp=newCCNumbers[i]-largest[0]==0;
    if(comp){
    ccIndex.push(i);
    }
}

//Run For Each loop in ccIndex to log ccNumbers that have the index numbers
function listLargestCC(item, index) {
    console.log(ccNumbers[item]); 
}

ccIndex.forEach(listLargestCC);