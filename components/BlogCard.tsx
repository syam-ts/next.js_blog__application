import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IBlogs {
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

interface BlogCardProps {
  data: IBlogs[];
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const [input, setInput] = useState("");
  const [filteredDatas, setFilteredDatas] = useState(data);

  useEffect(() => {
    if (input.length >= 1) {
      const filter = data?.filter((dat) =>
        dat?.title?.toLocaleLowerCase().includes(input)
      );

      setFilteredDatas(filter);
    } else {
      setFilteredDatas(data);
    }
  }, [input]);

  return (
    <div className="grid justify-center">
      <div className="w-2/4 justify-center mx-auto">
        <div className="py-4">
          <label className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-1 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              id="search-bar"
              onChange={(e) => setInput(e.target.value)}
              placeholder="your keyword here"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none text-black bg-white"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
              <div className="relative">
                <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                  <svg
                    className="opacity-0 animate-spin w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>

                <div className="flex items-center transition-all valid:">
                  <span className="text-sm font-semibold text-white truncate mx-auto">
                    Search
                  </span>
                </div>
              </div>
            </button>
          </label>
        </div>
      </div>
      {filteredDatas?.map((blog: IBlogs, index: number) => (
        <div
          key={index}
          className="flex justify-between text-center gap-5  border-b border-gray-300 p-2 m-4 w-[60rem]"
        >
          <div>
            <img
              src={blog?.image_url as string}
              className="w-[15rem] h-[9rem] object-cover"
              alt="image"
            />
          </div>

          <div className="grid justify-start text-start">
            <span className="text-black font-light text-md">
              {blog?.pubDate}
            </span>
            <div>
              <Link href={`/home/${blog.article_id}`}>
              
              <h2 className="text-black font-bold text-xl">{blog?.title}</h2>
              </Link>
            </div>
            <p className="text-black font-normal text-lg">
              {blog?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
