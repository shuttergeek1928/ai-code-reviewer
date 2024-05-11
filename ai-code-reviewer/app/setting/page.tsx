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
      <div className="flex flex-row w-screen p-24 gap-10">
        <div className="w-1/2 rounded-lg border-2 shadow-2xl">
          <div className="flex flex-col justify-center items-center p-6">
            <p className="font-extrabold">Sharing</p>
            <div className="flex justify-center items-center p-3 gap-3 ">
              <p>Invite</p>
              <input
                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="invite"
                type="gmail"
                placeholder="enter email to invite"
              />
            </div>
            <div className="flex justify-center items-center p-3 gap-3 ">
              <p>Share link to collaborators</p>
              <button className="hex-button hover:bg-blue-800">Share</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 rounded-lg border-2 shadow-2xl">
          <div className="flex justify-center items-center p-2">
            <p className="font-extrabold">Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
