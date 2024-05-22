import React from "react";

const Spinner: React.FC = () => {
  return (
    
      <div className="flex w-screen justify-center items-center">
        <div className="animate-spin rounded-lg h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        <div className="animate-spin rounded-xl h-60 w-60 border-t-4 border-b-4 border-green-500"></div>
        <div className="animate-spin rounded-2xl h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
        <div className="animate-spin rounded-3xl h-56 w-56 border-t-4 border-b-4 border-blue-500"></div>
      </div>
  );
};

export default Spinner;
