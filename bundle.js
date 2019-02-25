(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mulder-brewing-palindrome");

function palindromeTester (event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
      palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
      palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
})

},{"mulder-brewing-palindrome":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
