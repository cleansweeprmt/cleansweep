
  
  // app/api/fetchPost.js
  export async function fetchPost(slug) {
    const res = await fetch(`https://dashboard.hrfleek.com/wp-json/wp/v2/posts?slug=${slug}`);
    const posts = await res.json();
    const post = posts.length ? posts[0] : null;
  
    if (post && post.featured_media) {
      const mediaRes = await fetch(`https://dashboard.hrfleek.com/wp-json/wp/v2/media/${post.featured_media}`);
      const media = await mediaRes.json();
      post.featured_image = media.source_url;
    }
  
    return post;
  }
  