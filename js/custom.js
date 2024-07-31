(function ($) {

  "use strict";

  // COUNTER NUMBERS
  jQuery('.counter-thumb').appear(function() {
    jQuery('.counter-number').countTo();
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  // Function to edit the email field
  function editEmail(newEmail) {
    var form = document.querySelector('.custom-form.contact-form');

    if (form) {
      var emailField = form.querySelector('input[type="email"]');
      if (emailField) {
        emailField.value = newEmail;
      } else {
        console.log('Email input field not found');
      }
    } else {
      console.log('Form not found');
    }
  }

  // Call the function with the new email value
  $(document).ready(function() {
    editEmail('elmehdirahaoui1@gmail.com');
  });

})(window.jQuery);