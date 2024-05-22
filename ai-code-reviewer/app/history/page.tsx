import HistoryCard from "@/components/historycard";
import React from "react";

const History = () => {
  return (
    <>
      {/* <div className="flex flex-wrap justify-center gap-2">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div> */}
      <div className="flex flex-wrap justify-center w-full h-full overflow-y-scroll gap-16">
        <div className="flex justify-center w-full">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
        <div className="flex justify-center w-full">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
        <div className="flex justify-center w-full">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </>
  );
};

export default History;
