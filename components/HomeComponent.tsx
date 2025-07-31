"use client"
import { useGetBolgs } from '@/feature/hooks/useGetBlogs'
import React from 'react'
import BlogCard from './BlogCard';

const HomeComponent = () => {

    const {data} = useGetBolgs();
 
 
  return (
    <div>
        <BlogCard data={data?.articles} />
    </div>
  )
}

export default HomeComponent