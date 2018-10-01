import './sass/styles.scss';
// import './journal.js';
//BACK END

function Entry(title, content, date){
  this.title = title;
  this.content = content;
  this.date = date;
}

function makeEntry(title, content, date) {
  var newEntry = new Entry(title, content, date);
  newEntry.words = newEntry.wordCount();
  newEntry.vowels = newEntry.vowelCount();
  newEntry.consonants = newEntry.consonantCount();
  newEntry.teaser = newEntry.getTeaser();
  return newEntry;
}

var titleTest = "Today was Horrible";
var contentTest = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt bunt in culpa qui officia deserunt mollit anim id est laborum.";
var dateTest = "January 15th, 1984";



Entry.prototype.wordCount = function() {
  var wordSplit = this.content.split(" ");
  return wordSplit.length;
};

Entry.prototype.vowelCount = function() {
  var vowels = this.content.match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

Entry.prototype.consonantCount = function() {
  var consonants = this.content.match(/[qwrtyplkjhgfdszxcvbnm]/gi);
  return consonants === null ? 0 :  consonants.length;
};

Entry.prototype.getTeaser = function() {
  var wordSplit = this.content.split(/[.!?]/gi);
  var wordSplitArray = wordSplit[0].split();
  var wordArray = wordSplitArray.slice(0, 8);
  return wordArray.join(" ");
}



//FRONT END
$(document).ready(function(){

  var test = makeEntry(titleTest, contentTest, dateTest);
  console.log(test);
});
