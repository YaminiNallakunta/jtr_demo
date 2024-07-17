function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched posts:', data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
  fetchPosts();
  
  