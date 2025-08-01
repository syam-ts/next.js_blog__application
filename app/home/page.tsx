import React from "react";
import HomeComponent from "@/components/HomeComponent";
import HomeHeadComponent from "@/components/HomeHeadComponent";

const page = () => {
  return (
    <div className="pt-44">
      <HomeHeadComponent />
      <h1 className="text-4xl font-bold text-black flex justify-center pt-32 pb-4">
        Blog Posts
      </h1>
      <hr className="w-2/3 mx-auto justify-center text-center py-5" />
      <HomeComponent />
    </div>
  );
};

export default page;
