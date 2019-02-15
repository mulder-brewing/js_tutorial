module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
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
    return this.processor(this.letters());
  }

  //Returns the letters in the content.
  this.letters = function () {
    const regex = /[a-z]/gi;
    return (this.content.match(regex) || []).join("");
  }


  //Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent() === "") {
      return false;
    } else {
      return this.processedContent() === this.processedContent().reverse();
    }
  }
}
