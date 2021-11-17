$(document).ready(function() {
  $("#tweet-text").on("input", function () {
    const characterLimit = 140;
    const charactersRemain = characterLimit - $(this).val().length;
    const $counter = $(this).parent().find(".counter");
    $counter.text(charactersRemain);

    if (charactersRemain < 0) {
      $counter.addClass("invalid");
    } else {
      $counter.removeClass("invalid");
    }
  });
});