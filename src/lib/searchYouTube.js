var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}&type=video&statusembeddable=true`,
    success: function(videoList) {
      console.log('success');
      callback(videoList.items);

    }, 
    fail: function(e) {
      console.log('failed');
    }
  });
};

window.searchYouTube = searchYouTube;
