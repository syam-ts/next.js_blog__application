"use client"
import { useGetBolgs } from '@/feature/hooks/useGetBlogs'
import React from 'react'
import BlogCard from './BlogCard';
import { blogData } from '@/utils/contant/blog';

const HomeComponent = () => {

  //  const {data} = useGetBolgs();

   const data = blogData
 
 
  return (
    <div>
        {/* <BlogCard data={data?.results} /> */}
        <BlogCard data={data} />
    </div>
  )
}

export default HomeComponent