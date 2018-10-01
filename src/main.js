import './sass/styles.scss';
// import $ from jquery;
//BACK END

function Entry(title, content){
  this.title = title;
  this.content = content;
  // this.date = date;
}

function makeEntry(title, content) {
  var newEntry = new Entry(title, content);
  newEntry.words = newEntry.wordCount();
  newEntry.vowels = newEntry.vowelCount();
  newEntry.consonants = newEntry.consonantCount();
  newEntry.teaser = newEntry.getTeaser();
  return newEntry;
}

// var titleTest = "Today was Horrible";
// var contentTest = "Lorem ipsum dolor! sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt bunt in culpa qui officia deserunt mollit anim id est laborum.";
// var dateTest = "January 15th, 1984";



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

//find the first eight words
var firstEightArray = this.content.split(" ").slice(0, 8).join(" ").split("");
//if first eight vontains puncation
var wordIndex = firstEightArray.findIndex(wordRegex);
function wordRegex(element){
  var answer;
  return answer === null ? 0 :  element.match(/[.!?]/gi);
}
if ( wordIndex === -1) {
  return firstEightArray.join("");
} else {
  var wordArray = firstEightArray.slice(0, (wordIndex + 1));
  return wordArray.join("");
}
};



//FRONT END
$(document).ready(function(){
  $("#submit-button").click(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var content = $("#content").val();
    var journalEntry = makeEntry(title, content);
    $(".journal-container").append('<div class="journal-post card well">' + '<h1 class="title-post card-header">' + journalEntry.title +
    '</h1><h2 class="teaser-post card-text">' +
    journalEntry.teaser +
     '</h2><p class="content-post card-text">' + journalEntry.content +
      '</p><p class="word-count card-text">Words: ' +  journalEntry.words +
      '</p><p class="vowel-count card-text">Vowels: ' + journalEntry.vowels +
      '</p><p class="consonant-count card-text">Consonants: ' +
      journalEntry.consonants +
      '</p></div>');
      $("#title").val('');
      $("#content").val('');
  });
});
