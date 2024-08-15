
  
  // app/api/fetchServices.js
  export async function fetchServices(slug) {
    const res = await fetch(`https://dashboard.hrfleek.com/wp-json/wp/v2/catalogue?slug=${slug}`);
    const posts = await res.json();
    const post = posts.length ? posts[0] : null;
  
    if (post && post.featured_media) {
      const mediaRes = await fetch(`https://dashboard.hrfleek.com/wp-json/wp/v2/media/${post.featured_media}`);
      const media = await mediaRes.json();
      post.featured_image = media.source_url;
    }
  
    return post;
  }
  
  export async function fetchAllServices() {
    const res = await fetch(`https://dashboard.hrfleek.com/wp-json/wp/v2/catalogue`);
    const posts = await res.json(); 
    return posts;
  }