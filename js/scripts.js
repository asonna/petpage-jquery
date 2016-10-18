$(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("h1").removeClass();
    $("h1").addClass("dark-background");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("h1").removeClass();
  });
});
