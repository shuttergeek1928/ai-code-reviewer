"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Signup = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("login");
  };
  return (
    <>
      <div className="flex flex-row items-center justify-evenly gap-40">
        <div>
          <Image
            src="/signup-image.png"
            alt="header image"
            width={550}
            height={550}
          />
        </div>
        <div className="flex">
          <div className="flex flex-col h-full justify-center items-center gap-8 p-2">
            <form className="">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username / Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>

              <button
                className="hex-button hover:bg-blue-800"
                onClick={() => router.push("/login")}
              >
                Signup
              </button>
              <div className="flex flex-row items-center justify-center gap-2">
                <hr className="bg-black h-1 w-[150px]" />
                <h3> or </h3>
                <hr className="bg-black h-1 w-[150px]" />
              </div>
            </form>
            <button
              className="flex flex-row gap-10 items-center justify-between"
              onClick={() => router.push("/login")}>
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
