import React from 'react'
import Link from "next/link";

function Wansom() {
  return (
    <div className="container max-w-7xl mx-auto ">
        <h1>Links</h1>
        <Link href="/wansom/service">Service Detail</Link>
        <br />
        <br />
        <Link href="/wansom/articles">Articles</Link>
        <br />
        <br />
        <Link href="/wansom/article-detail">Article Detail</Link>
    </div>
  )
}

export default Wansom

