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
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');