/*********Side-bar Click Functions*******************/
     //Home Landing Page
     $(".container").not(document.getElementById("main")).hide();

    //Events show
    $("#Events").click(function(){
      $("#timeline").parent().parent().show();
      $(".container").not(document.getElementById("event_cont")).hide();
      $("#Events").css("background-color","#3d3d5c");
      $(".sidebar-nav >li").not(document.getElementById( "Events" )).css("background-color","black");
    });
     // home page show again
     $("#Home").click(function(){
      $("#main").show();
      $(".container").not(document.getElementById("main")).hide();
      $(".sidebar-nav >li").not(document.getElementById( "Home" )).css("background-color","black");
      $("#Home").css("background-color","#3d3d5c");
    });

     //Discussion Board show
     $("#dis").click(function(){
      $("#dis_cont").show();
      $(".container").not(document.getElementById("dis_cont")).hide();
      $("#dis").css("background-color","#3d3d5c");
      $(".sidebar-nav >li").not(document.getElementById( "dis" )).css("background-color","black");
    });

     //Members show
     $("#members").click(function(){
      $("#members_cont").show();
      $(".container").not(document.getElementById("members_cont")).hide();
      $("#members").css("background-color","#3d3d5c");
      $(".sidebar-nav >li").not(document.getElementById( "members" )).css("background-color","black");
    });

     //Exec Team contacts show
     $("#Contact").click(function(){
      $("#exe_contact_cont").show();
      $(".container").not(document.getElementById("exe_contact_cont")).hide();
      $("#Contact").css("background-color","#3d3d5c");
      $(".sidebar-nav >li").not(document.getElementById( "Contact" )).css("background-color","black");
    });

     //Change settings contacts show
     $("#settings").click(function(){
      $("#settings_cont").show();
      $(".container").not(document.getElementById("settings_cont")).hide();
      $("#settings").css("background-color","#3d3d5c");
      $(".sidebar-nav >li").not(document.getElementById( "settings" )).css("background-color","black");
    });

     /*********Side-bar Functions End*******************/

     //Menu Toggle Script
     $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");

    });

//Remove user's announcement/comment
$(".glyphicon-remove").click(function(){
    $("#delAnnounce").style.display="block";
});

//delete button click: change the value in the delete modal form
$("button.remove").click(function(e){
  e.preventDefault;
  var value=$(this).attr("id");
  $("#postID").val(value);
});

//Delete a post without reloading page using Ajax
// function submitForm(){
//   var http = new XMLHttpRequest();
//   http.open("post", "cgi-bin/del_post.py",true);
//   var params = "postID="+$("#postID").val();
//   http.send(params);
//   http.onload=function(){
//     alert(params);
//     alert(http.responseText);
//   }
// }


  $('#del_btn').submit(function(e){
    e.preventDefault();

    var formData = $(this).serialize();
    var button_id = $(this).attr("id");
    $.ajax({
      url:"cgi-bin/delete.py"
      success: function(){
        $('article#button_id').hide();
        $('this.form').hide()
      }
    })
  });
