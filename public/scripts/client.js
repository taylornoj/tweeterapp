/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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

function renderTweets(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweet-container').append($tweet);
  }
}

// generating the DOM structure for a tweet
function createTweetElement (tweetData) {
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
      <p>${timeago.format(created_at)}</p>
      <div>
        <i class="far fa-flag"></i> 
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
      </div>
    </footer>
</article>`)
  return tweetElementHTML;
};

$(document).ready(function() {
  renderTweets(data);
  $("#tweet-container").prepend($tweet);

});


