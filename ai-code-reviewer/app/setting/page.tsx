"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Setting = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
    <button
      className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
      <div className="flex flex-row w-[70%] p-2 gap-10">
        <div className="w-1/2 rounded-lg border-2 shadow-2xl ">
          <div className="flex justify-center items-center p-2">
            <p>Sharing</p>
          </div>
        </div>
        <div className="w-1/2 rounded-lg border-2 shadow-2xl  bold">
          <div className="flex justify-center items-center p-2">
            <p>Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
