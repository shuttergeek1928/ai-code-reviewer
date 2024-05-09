import HistoryCard from "@/components/historycard";
import React from "react";

const History = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-full overflow-y-scroll gap-16">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </>
  );
};

export default History;
