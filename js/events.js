//define functions here
function getIt() {
  $("p").on("click", function () {
    alert("Hey!")
  })
}
function frameIt() {
  $("img").on("load", function () {
    $("img").addClass("tasty")
  })
}
function pressIt() {
  $('body').on("keydown", function (keypressEvent) {
    if (keypressEvent.key === 'g'){
      alert("g!")      
    }
  })
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()

});
