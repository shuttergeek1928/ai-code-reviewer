import Sidebar from "@/components/sidebar";
import React from "react";

const Code = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen px-8">
        <div className="flex items-center justify-center w-full h-24">
          <button className="hex-button hover:bg-blue-800">
            + Manage Repositories
          </button>
        </div>
        <div className="flex flex-row w-full h-[80%] gap-14">
          <div className="w-1/2 rounded-lg border-2 border-gray-500">
            <h2 className="p-2">Type here......</h2>
          </div>
          <div className="w-1/2 rounded-lg border-2 border-gray-500 "></div>
        </div> 
        <div className="flex items-center justify-center w-full h-24">
        <button className="hex-button hover:bg-blue-800">
            Review
        </button>
        </div>
      </div>
    </>
  );
};

export default Code;
