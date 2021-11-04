import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.pagination li').on('click', function(event) {
  event.preventDefault();
  var $this = $(this),
      $pagination = $this.parent(),
      $pages = $pagination.children(),
      $active = $pagination.find('.active');
  
  if($this.hasClass('prev')) {
    if ($pages.index($active) > 1) {
      $active.removeClass('active').prev().addClass('active');
    }
  } else if($this.hasClass('next')) {
    if ($pages.index($active) < $pages.length - 2) {
      $active.removeClass('active').next().addClass('active');
    }
  } else {
    $this.addClass('active').siblings().removeClass('active');
  }
  
  $active = $pagination.find('.active');
  
  $('.prev')[$pages.index($active) == 1 ? 'addClass' : 'removeClass']('disabled');
  $('.next')[$pages.index($active) == $pages.length - 2 ? 'addClass' : 'removeClass']('disabled');
  
});

$('.pagination li:eq(1)').trigger('click');
