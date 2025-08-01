


export const GetBlogs = async () => {
    const api = 'https://newsdata.io/api/1/latest?apikey=pub_77702483ad554412aced9a20966fb3ed&country=us&prioritydomain=top'
    console.log('API: ', process.env.NEXT_PUBLIC_API_KEY as string)
    const data = await fetch(api);
    const result = await data.json();
    return result;
};
