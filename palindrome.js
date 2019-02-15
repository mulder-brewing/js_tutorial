//Reverses a string
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function () {
  if (this.match(/^\s*$/)) {
    return true;
  } else {
    return false;
  }
}

Array.prototype.last = function () {
  return this.slice(-1);
}

//Define  a Phrase object.
function Phrase(content) {
  this.content = content;

  //process string to toLowerCase.
  this.processor = function (string) {
    return string.toLowerCase();
  }

  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }


  //Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

//Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
TranslatedPhrase.prototype = new Phrase();

phrase = new Phrase("Racecar");
console.log(phrase.content);
console.log(phrase.palindrome());

frase = new TranslatedPhrase("recognize","reconocer");
console.log(frase);
console.log(frase.palindrome());
