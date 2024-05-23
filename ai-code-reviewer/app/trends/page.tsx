'use client'
import BarCharts from "@/components/barchart";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Trends = () => {
  const { user, setUser } = useAuth();
  return (
    <>
      {user !== null ? (
        <BarCharts />
      ) : (
        <div className="flex flex-row flex-wrap justify-center items-center w-full overflow-y-scroll gap-8">
          {" "}
          You are not logged in
        </div>
      )}
    </>
  );
};

export default Trends;
