/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function renderTweets(tweets) {
  $('#tweet-text').val('');
  $('#tweet-container').empty();
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
  }
}

// -- generating the DOM structure for a tweet
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

// -- AJAX GET request for newly written tweet
function loadTweets() {
  $.ajax("/tweets", {
    method: "GET"})
    .then(function (tweets) {
      //console.log("success:",tweets)
      renderTweets(tweets);
    })
};


$(document).ready(function() {
  //renderTweets(data);

  $("#post-tweet").submit(function (event) {
    event.preventDefault();
    console.log("new tweeter!");

    // GET MENTOR CHECK ON THIS:
    // -- Validate text length before posting
    const textLength = $(this).children("#tweet-text");
    if (!textLength.val()) {
      alert("Your Tweet is Empty!");
      return false;
    }
    if (textLength.val().length > 140) {
      alert("Your Tweet is too Long!")
      return false;
    }

    $.ajax("/tweets", {
      method: "POST",
      data: $("#post-tweet").serialize(),
      success: () => {loadTweets()}
    })
  });
  loadTweets();
});


