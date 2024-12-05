import React from 'react'
import { SearchHeader } from '../pages/blogs/SearchHeader'
import { Navigation } from '../pages/blogs/Navigations'
import { ArticleCards } from '../pages/blogs/ArticleCards'
import BlogCard from '../pages/blogs/BlogCard'
import { ScrollAreaHorizontalDemo } from '../pages/blogs/Cards'
import HorizontalScroll from '../pages/blogs/HorizontalScrollCards'

const Blogs = () => {
  return (
    <div className="  min-h-screen flex flex-col">
    <SearchHeader />
    <Navigation />
    {/* <BlogCard /> */}
    
    <div className="flex-1 overflow-auto">
      {/* <ScrollAreaHorizontalDemo /> */}
      <HorizontalScroll/>
      <main className="flex-1">
        {/* <ArticleCards /> */}
      </main>
    </div>
  </div>
  
  )
}

export default Blogs
