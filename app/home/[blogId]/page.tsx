import BlogPage from '@/components/BlogPage';
import React, { use } from 'react'

const page = ({ params }: { params: Promise<{ blogId: string }> }) => {

    const { blogId } = use(params);


    return (
        <div> 
            <BlogPage blogId={blogId} />
        </div>
    )
}

export default page