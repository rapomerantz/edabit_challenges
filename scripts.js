console.log( 'JS LINKED' );


//Return the four-letter strings from an array
let countLettersArr = ["Ryan", "Kieran", "Jason", "Matt"];
function isFourLetters (countLettersArr) {
  let result = countLettersArr.filter(word => word.length === 4);
  return result;

}
console.log(isFourLetters(countLettersArr));

countLettersArr = ["Tomato", "Potato", "Pair"];
function isFourLetters (countLettersArr) {
  let result = countLettersArr.filter(word => word.length === 4);
  return result;

}
console.log(isFourLetters(countLettersArr));
//END Return the four-letter strings from an array



//String ending matches second string
let strOne = "convention";
let strTwo = "tio";
console.log(strOne);
console.log(strTwo);

function endingMatch(strOne, strTwo) {
    if (strOne.endsWith(strTwo)) {
      return true;
    } else {
      return false;
    }
}
console.log(endingMatch(strOne, strTwo));

strOne = "extraterrestrial";
strTwo = "xtraterrestrial";
console.log(strOne);
console.log(strTwo);

function endingMatch(strOne, strTwo) {
    if (strOne.endsWith(strTwo)) {
      return true;
    } else {
      return false;
    }
}
console.log(endingMatch(strOne, strTwo));
//END string ending matches string two


// Milk & Cookies: Return true if date is Dec 24
let milkCookesDate = new Date( 2013, 11, 24 );
console.log("month (11=dec): " + milkCookesDate.getMonth());
console.log("day: " + milkCookesDate.getDate());

function christmasEve(milkCookesDate) {
  if (milkCookesDate.getDate() === 24 && milkCookesDate.getMonth() === 11) {
    return true;
  } else {
    return false;
  }
}
console.log(christmasEve(milkCookesDate));
//END Milk & Cookies






//Alphabet Soup: Sort and return a single-word string alphabetically
let alphabetSoup = "superduper";
console.log("Alphabet Soup var: " + alphabetSoup);

function reorderLetters(alphabetSoup) {
  return alphabetSoup.split('').sort().join('');
}

console.log("Redorder letters alphabetically: " + reorderLetters(alphabetSoup));
//end Alphabet Soup: Sort and return a single-word string alphabetically


//a shorter way to shuffle the name
let nancyPelosi = "Nancy Pelosi";
console.log(nancyPelosi);

function shuffleName (nancyPelosi) {
  return nancyPelosi.split (' ').reverse().join (' ');
}

console.log(shuffleName(nancyPelosi));
//end shorter way to shuffle the name


//Original solution to Shuffle the name
let donaldTrump = "Donald Trump";
console.log(donaldTrump + " reversed would be:");

function nameShuffle (donaldTrump) {
  let split = (donaldTrump.split (' '));
  let reverse = split.reverse();
  reverse = reverse.join(' ');
  return reverse;
}

console.log (nameShuffle(donaldTrump));
//end OG solution to Shuffle the name


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
