/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// generating the DOM structure for a tweet
function createTweetElement (tweetData) {
  //const $tweet = $(`<article class="tweet">`)
  const {user, content, created_at} = tweetData;
  const tweetElementHTML = $(`<article class="tweet">
  <header>
    <span class="username"><img src="${user.avatars}">${user.name}</span>
    <span class="userHandle">${user.handle}</span>
    </header>
    <div class="tweet-content">
      <p>${content.text}</p>
    </div>
    <footer>
      <p>${created_at}</p>
      <div>
        <i class="far fa-flag"></i> 
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
      </div>
    </footer>
</article>`)
  return tweetElementHTML;
};

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": " I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
/////////////////////

$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  //console.log($tweet);
  $("#tweet-container").prepend($tweet);

});


