import React from "react";

interface IArticles {
  author?: string;
  content: string;
  title?: string;
  description: string;
  publishedAt: string;
  source: any;
  url: string;
  urlToImage: any;
}

interface BlogCardProps {
  data: IArticles[];
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <div className="grid justify-center">
      {data?.map((article: IArticles, index: number) => (
        <div
          key={index}
          className="text-center gap-5 border border-black p-3 justify-center m-4 w-[60rem]"
        >
          <h1 className="text-black line-clamp-1 font-bold text-xl">
            {article.title}
          </h1>
          <div>
            <h1 className="text-black">{article.description}</h1>
            <h1 className="text-black text-sm">{article.author}</h1>
          </div>
          <img src={article.url} />
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
