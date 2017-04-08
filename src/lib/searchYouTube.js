var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}&type=video&statusembeddable=true`,
    success: function(videoList) {
      console.log('success');
      console.log('query string in searchYouTube: ', options.query);
      if (callback !== undefined) {
        return callback(videoList.items);
      }

    }, 
    fail: function(e) {
      console.log('failed');
    }
  });
};

window.debounceSearch = _.debounce(searchYouTube, 2000);

window.searchYouTube = searchYouTube;
