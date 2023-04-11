// Load the YouTube API client library
gapi.load('client', function() {

    // Initialize the YouTube API client
    gapi.client.init({
      apiKey: 'API_KEY',  
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    }).then(function() {
      
      // Retrieve the description for the video
      gapi.client.youtube.videos.list({
        part: 'snippet',
        id: 'VIDEO_ID'
      }).then(function(response) {
        
        // Extract the description from the response
        var description = response.result.items[0].snippet.description;
        
        // Display the description in the HTML page
        document.getElementById('description').innerHTML = description;
        
      }, function(err) {
        console.error('Error retrieving video description', err);
      });
    });
  });
