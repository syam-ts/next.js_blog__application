import { GetBlogs } from "@/api/getBlogs";
import { useQuery } from "@tanstack/react-query";


export const useGetBolgs = () => {

    return useQuery({
        queryKey: ["blogs"],
        queryFn: () => GetBlogs(),
    });
};
