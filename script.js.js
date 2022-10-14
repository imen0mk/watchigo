var navOpenBtn = document.querySelector("[data-menu-open-btn]");
var navCloseBtn = document.querySelector("[data-menu-close-btn]");
var navbar = document.querySelector("[data-navbar]");
var overlay = document.querySelector("[data-overlay]");

var  navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (var i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}


console.log($(".action").html())

$('#action').on("click", function(){
  var action = $(".action").html()
  $('.romance').hide()
  $('.thriller').hide()
  $('.action').show()
})





console.log($(".romance").html())

$('#romance').on("click", function(){
  var romance= $(".romance").html()
  $('.romance').show()
  $('.thriller').hide()
  $('.action').hide()
})


