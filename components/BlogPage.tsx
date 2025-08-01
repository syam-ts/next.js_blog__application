import { blogData } from "@/utils/contant/blog";
import React from "react";

interface IBlog {
    article_id: string;
    title: string;
    link: string;
    keywords: string[];
    creator?: any;
    description: string;
    content?: any;
    pubDate: string;
    pubDateTZ: string;
    image_url: string | null;
    video_url?: any;
    source_id: string;
    source_name: string;
    source_priority: number;
    source_url: string;
    source_icon: string;
    language: string;
    country: string[];
    category: string[];
    sentiment: string;
    sentiment_stats: ISentimentstats;
    ai_tag: string[] | null;
    ai_region: any;
    ai_org: string[] | null;
    ai_summary: string;
    ai_content: string;
    duplicate: boolean;
}
interface ISentimentstats {
    positive: number;
    neutral: number;
    negative: number;
}

interface IBlogPageProps {
    blogId: string;
}

const BlogPage: React.FC<IBlogPageProps> = ({ blogId }) => {
    const blog: IBlog | undefined = blogData.find(
        (blog) => blog.article_id === blogId
    );

    return (
        <div className="pt-44">
            <h1 className="text-black"> Blog Detils </h1>
            <h1 className="text-black">{blog?.title}</h1>
        </div>
    );
};

export default BlogPage;
