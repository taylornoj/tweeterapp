/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//-- Preventing cross-site scripting attacks
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// -- Taking in array of tweet objects & rendering them to prepend to #tweets-container
function renderTweets(tweets) {
  $('#tweet-text').val('');
  $('#tweet-container').empty();
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
  }
};

// -- generating the DOM structure for a tweet
function createTweetElement (tweetData) {
  const {user, content, created_at} = tweetData;
  const tweetElementHTML = $(`<article class="tweet">
  <header>
    <span class="username"><img src="${user.avatars}">${user.name}</span>
    <span class="userHandle">${user.handle}</span>
    </header>
    <div class="tweet-content">
      <p>${escape(content.text)}</p>
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

// -- AJAX GET request for newly written tweet
function loadTweets() {
  $.ajax("/tweets", {
    method: "GET"})
    .then(function (tweets) {
      renderTweets(tweets);
    })
};

// -- Handling for new tweet submission
$(document).ready(function() {
  $("#post-tweet").submit(function (event) {
    event.preventDefault();

     // -- Displaying validation errors if input is invalid, otherwise continuing with client input
    $("#error-message").slideUp();
    const value = $(this).find("#tweet-text").val();
    if (!value.trim()) {
      $("#error-message")
        .html("🚨 Error! Your message is empty!").slideDown();
    } else if (value.length > 140) {
      $("#error-message")
        .html("🚨 Error! Your Tweet is too long!").slideDown();
    } else {
    $.ajax("/tweets", {
      method: "POST",
      data: $("#post-tweet").serialize(),
      success: () => {loadTweets()}
    })
  }  
  });
  loadTweets();
});


