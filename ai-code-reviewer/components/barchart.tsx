"use client";
import { TrendsResponse } from "@/app/models/responseModel";
import React, { PureComponent, useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const Code = () => {};

const BarCharts = () => {
  const [trends, setTrends] = useState<TrendsResponse[]>();

  useEffect(() => {
    const axios = require("axios");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/trends",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: "rutuja@gmail.com" },
    };
    axios
      .request(config)
      .then((response: { data: any }) => {
        setTrends(response.data);
        console.log(trends);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={trends}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="review_id" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="accuracy" barSize={80} fill="#413ea0" />
          <Line type="monotone" dataKey="accuracy" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCharts;
