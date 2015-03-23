 // Open a Pusher connection to the Realtime Reddit API
  var pusher = new Pusher("50ed18dd967b455393ed");

  // Subscribe to the /r/AskReddit subreddit (lowercase)
  var subredditChannel = pusher.subscribe("askreddit");
  var copy = "";
  // Listen for new stories
  subredditChannel.bind("new-listing", function(listing) {
    // Output listing to the browser console
      console.log(listing);
      $( "center" ).remove();
      var newlisting = "<div class='item'><a href='http://reddit.com" + listing.permalink + "' target='_blank'>" + listing.title + "</a></div>"
          
      if ( newlisting == copy ) {
        console.log('Duplicate received!');
        copy = newlisting;
      } else {
        $(newlisting).prependTo('.listings').hide().slideDown( "slow");
        copy = newlisting;
      }
  });
  