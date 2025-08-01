import { blogData } from "@/utils/contant/blog";
import Image from "next/image";
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
        <div className="pt-44 grid justify-center max-w-5xl mx-auto">
            <section>
                <div className="flex gap-5 justify-between">
                    <div>
                        <img
                            src={blog?.image_url as string}
                            className="w-[40rem] h-[25rem]"
                            alt="blog-image"
                        />
                    </div>
                    <div className="grid justify-center pt-44">
                        <ul>
                            <li>
                                <h1 className="text-2xl text-black line-clamp-1">
                                    {blog?.title.slice(0, 20)}
                                </h1>
                            </li>
                            <li>
                                <p className="text-black text-md">{blog?.language}</p>
                            </li>
                            <li>
                                <span className="text-black text-sm">{blog?.pubDate}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid gap-3 pt-20">
                    <span className="text-black text-sm">
                        {blog?.category} - {blog?.sentiment}
                    </span>
                    <p className="text-black text-md">{blog?.description}</p>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
