$(document).ready(function () {
  if ($(".owl-carousel").length) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          center: true,
        },
        600: {
          items: 1,
          nav: false,
          margin: 200,
        },
        1000: {
          items: 3,
          nav: false,
          loop: false,
          margin: 150,
        },
        1024: {
          items: 3,
          nav: false,
          loop: false,
          margin: 150,
        },
        1366:{
          items: 3,
          nav: false,
          loop: false,
          margin: 10,
        }
      },
    });

    $(".next").click(function () {
      $(".owl-carousel").trigger("next.owl.carousel");
    });
  
    $(".prev").click(function () {
      $(".owl-carousel").trigger("prev.owl.carousel");
    });
  }

  $("#input_name").focus(function () {
    $(".label_name").addClass("translate");
    $("#input_name").addClass("inFocus");
  });

  $("#input_name").blur(function () {
    if ($("#input_name").val() == "") {
      $(".label_name").removeClass("translate");
      $("#input_name").removeClass("inFocus");
    }
  });

  $("#input_id").focus(function () {
    $(".label_id").addClass("translate");
    $("#input_id").addClass("inFocus");
  });

  $("#input_id").blur(function () {
    if ($("#input_id").val() == "") {
      $(".label_id").removeClass("translate");
      $("#input_id").removeClass("inFocus");
    }
  });
});
