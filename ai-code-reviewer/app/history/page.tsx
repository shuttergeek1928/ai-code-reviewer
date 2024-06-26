"use client";
import HistoryCard from "@/components/historycard";
import React, { useEffect, useState } from "react";
import { HistoryResponse, TrendsResponse } from "../models/responseModel";
import { useAuth } from "../context/AuthContext";

let historyArrayList: HistoryResponse[] = [];
const History = () => {
  const { user, setUser } = useAuth();
  const [historyList, setHistoryList] = useState<HistoryResponse[] | null>(
    null
  );

  useEffect(() => {
    const axios = require("axios");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:5000/getreview/${user}`,
      headers: {},
    };
    axios
      .request(config)
      .then((response: { data: any }) => {
        setHistoryList(response.data);
        //console.log(response.data);
        console.log(config.url);
        historyArrayList = response.data;
        console.log(historyArrayList);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally();
  }, []);

  return (
    <>
      {user !== null ? (
        <div className="flex flex-row flex-wrap justify-center items-center w-full overflow-y-scroll gap-8">
          {historyArrayList.map((history) => (
            <HistoryCard
              inputCode={history.input}
              outputCode={history.output}
              reviewId={history.review_id}
            />
          ))}
        </div>
      )
      : (<div className="flex flex-row flex-wrap justify-center items-center w-full overflow-y-scroll gap-8"> You are not logged in</div>)
    }
    </>
  );
};

export default History;
