var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}`,
    success: function(videoList) {
      console.log('success');
      console.log('callback', callback);
      callback(videoList);

    }, 
    fail: function(e) {
      console.log('failed');
    }
  });
};

window.searchYouTube = searchYouTube;
