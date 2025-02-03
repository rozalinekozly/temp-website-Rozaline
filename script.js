// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Define some sample blog posts
    const posts = [
      {
        title: 'Welcome to My Blog',
        content: 'This is the first post on my blog. Stay tuned for more content!'
      },
      {
        title: 'Another Day, Another Post',
        content: 'Today, I wanted to share some insights on web development and best practices.'
      },
      {
        title: 'JavaScript Tips',
        content: 'Here are some useful JavaScript tips that I have learned over the years.'
      }
    ];
  
    // Get the container where the posts will be displayed
    const postsContainer = document.getElementById('posts');
  
    // Create and append each post to the container
    posts.forEach(post => {
      // Create an article element for each post
      const article = document.createElement('article');
  
      // Create and set up the post title
      const title = document.createElement('h2');
      title.textContent = post.title;
  
      // Create and set up the post content
      const content = document.createElement('p');
      content.textContent = post.content;
  
      // Append title and content to the article
      article.appendChild(title);
      article.appendChild(content);
  
      // Append the article to the posts container
      postsContainer.appendChild(article);
    });
  });
  