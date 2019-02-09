var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My Wedding',
    // App id
    id: 'com.ajpasigado.mywedding',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'home.html',
      },
      {
        path: '/event-details/',
        url: 'event-details.html',
      },
      {
        path: '/our-story/',
        url: 'our-story.html',
      },
      {
        path: '/guests/',
        url: 'guests.html',
      },
      {
        path: '/faq/',
        url: 'faq.html',
      },
      {
        path: '/menu/',
        url: 'menu.html',
      },
      {
        path: '/venue/',
        url: 'venue.html',
      },
      
      {
        path: '/test/',
        url: 'test.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');

  var swiper = app.swiper.get('.swiper-container');

  function clickSlide(a){
    for (i = 0; i < a; i++) {
      swiper.slideNext();
    }
    
  }

  function prevSlide(a){
    for (i = 0; i < a; i++) {
      swiper.slidePrev();
    }
  }

$(function() {
  $("#guests").on("scroll", function() {
    if($("#guests").scrollTop() > 1) {
        $("#guests-bar").addClass("guest-active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#guests-bar").removeClass("guest-active");
    }
});

  $("#venue").on("scroll", function() {
      if ($("#venue").scrollTop() > 150) {
          $("#venue-church").addClass("title-active");
      } else {
        $("#venue-church").removeClass("title-active");
     }
      
      if($("#venue").scrollTop() > 900) {
          $("#venue-reception").addClass("title-active");
      } else {
         $("#venue-reception").removeClass("title-active");
      }
  });

  $("#menu").on("scroll", function() {
    if ($("#menu").scrollTop() > 10) {
        $("#menu-appetizer").addClass("title-active");
    } else {
      $("#menu-appetizer").removeClass("title-active");
   }
    
    if($("#menu").scrollTop() > 300) {
        $("#menu-main").addClass("title-active");
    } else {
       $("#menu-main").removeClass("title-active");
    }
  });

  $("#story").on("scroll", function() {
    if ($("#story").scrollTop() > 1) {
        $("#story-div").addClass("gradient-bg");
    } else {
      $("#story-div").removeClass("gradient-bg");
   }
  });

  $("#home").on("scroll", function() {
    if ($("#home").scrollTop() > 1) {
        $("#home-div").addClass("gradient-bg");
    } else {
      $("#home-div").removeClass("gradient-bg");
   }
  });

  $("#event").on("scroll", function() {
    if ($("#event").scrollTop() > 1) {
        $("#event-div").addClass("gradient-bg");
    } else {
      $("#event-div").removeClass("gradient-bg");
   }
  });
});