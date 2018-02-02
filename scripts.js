console.log( 'JS LINKED' );











//Is a number even or odd?
let a = 5;

function isEvenOrOdd(a) {
  let remainder = a % 2;
  if (remainder === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEvenOrOdd(a));
//End is a number even or odd?



//Count the number of words in a sentence
let quote = "Four score and seven years ago"

function countWords(quote){
	return quote.split (' ').length

}
console.log(countWords(quote));
//End Count the number of words in a sentence



//Return last item in an array
let animals = ["Bears", "Pumas", "Elephants"];

function getLastItem(animals) {
  return animals.pop();
}
console.log(getLastItem(animals));
//End Return Last item in array




//Is a number less than or equal to zero?
function lessThanOrEqualToZero(num) {
	if (num <= 0) {
	    return true;
  } else {
    return false;
  }
}
//End less than or equal to zero
