$(document).ready(function(){
  $(document).ready(function(){
    $("#login").hide();
    $("#login-choice").click(function(){
      $("#login").fadeToggle();
    });
    $("h3>span").click(function(){
      $("#login").fadeToggle();
    });
  });
});
