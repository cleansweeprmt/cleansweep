// pages/index.js
'use client'
import PageHeader from '../(components)/header'
import { useEffect, useState } from 'react';
import BlogSection from '../(components)/articles';
async function fetchPosts(page = 1) {
  const res = await fetch(`https://consultation.intelliverseai.com/wp-json/wp/v2/posts?per_page=12&page=${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  const totalPages = res.headers.get('X-WP-TotalPages');
  return { posts, totalPages: Number(totalPages) };
}


export default function Home() {
  const [postsData, setPostsData] = useState({ posts: [], totalPages: 0 });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadPosts = async (page) => {
    setLoading(true);
    try {
      const data = await fetchPosts(page);
      setPostsData(data);
      setPage(page);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts(page);
  }, []);

  return (
    <div>
      <PageHeader title={'View Our Articles'} subTitle={''}/>
    
      {/* Resource Section */}
      <BlogSection number={9}/>
      

      {/* Other components or content can be here */}
    </div>
  )
}

