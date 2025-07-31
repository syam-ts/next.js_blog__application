

export const GetBlogs = async () => {
    console.log('API: ', process.env.NEXT_PUBLIC_API_KEY as string)
    const data = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=996c69cbcfd646ca85bfd54d6fa8127d`);
    const result = await data.json();
    return result;
};
