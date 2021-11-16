$(document).ready(() => {
  $("#tweet-text").on("input", function () {
    const characterLimit = 140;
    const charactersRemain = characterLimit - $(this).val().length;
    console.log(charactersRemain);
  })
});