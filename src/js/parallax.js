
if ($(window).width() > "992") {
    $("body").on("mousemove", (e) => {
  
      const x = e.pageX / $(window).width();
      const y = e.pageY / $(window).height();
  
      $(".parallax__background_1").css(
        "transform",
        "translate(-" + x * 70 + "px, -" + y * 10 + "px"
      );
  
      $(".parallax__background_2").css(
        "transform",
        "translate(-" + x * 150 + "px, -" + y * 20 + "px"
      );
      $(".parallax__background_3").css(
        "transform",
        "translate(" + x * 140 + "px, " + y * 20 + "px"
      );
  
      $(".parallax__background-event_1").css(
        "transform",
        "translate(-" + x * 130 + "px," + y * 10 + "px"
      );
  
      $(".parallax__background-event_2").css(
        "transform",
        "translate(-" + x * 150 + "px," + y * 5 + "px"
      );
      $(".parallax__background-event_3").css(
        "transform",
        "translate(" + x * 130 + "px, " + y * 30 + "px"
      );
      $(".parallax__background-event_4").css(
        "transform", `translate(${(x * 70) - 70}px, ${(y * 10) - 220}px)`
      );
      $(".parallax__background-contacts").css(
        "transform", `translate(${(x * 70) - 100}px, ${(y * 10) - 250}px)`
      );
  
    });
  }