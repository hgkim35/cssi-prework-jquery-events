//define functions here

$(document).ready(function(){

// call functions here
function getIt(){
  alert("Hey!");
}
$("p").click(getIt);

// The function should bind a load event that adds the class tasty to the image to add a red frame to the image//
function frameIt(){
  $("img").addClass("Tasty"){
    $(this).css('border', "solid 2px red");
  };
}

// Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the g key.//
function pressIt(){
  $("form").on("keydown", function(key){
    if(key == g){
      alert('You have pressed G!');
    }
  });
}

//Define a function submitIt that does not accept a parameter. The function should alert "your form is going to be submitted now". And then return;//
function submitIt(){
  $("form").on("submit", function(){
    alert("your form is going to be submitted now");
  })
}
});
