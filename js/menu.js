// User Menu Animation

$(document).ready(function() {

  $(".user-toggle").click(function() {
    $(this).toggleClass("on");
    $(".user-menu").slideToggle();
  });
  
});

// Secondary Menu Animation

$(document).ready(function() {

  $(".menu-toggle").click(function() {
    $(this).toggleClass("on");
    $(".secondary-menu").slideToggle();
  });
  
});

// Apps Menu Animation

$(document).ready(function() {

  $(".apps-toggle").click(function() {
    $(this).toggleClass("on");
    $(".apps-menu-container").toggle();
  });
  
});