"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RequestRegisterModel } from "../models/requestModels";
import { SignInResponse } from "../models/responseModel";

const Signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUpModel = {} as RequestRegisterModel;
  
  const [signUpResponse, setSignUpResponse] = useState<SignInResponse | null>(
    null
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: any
  ) => {
    if (type === "firstname") {
      setFirstName(event.target.value);
    }
    if (type === "lastname") {
      setLastName(event.target.value);
    }
    if (type === "email") {
      setEmail(event.target.value);
    }
    if (type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleClick = async () => {
    signUpModel.password = password;
    signUpModel.email = email;
    signUpModel.lastname = lastName;
    signUpModel.firstname = firstName;
    const axios = require("axios");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: signUpModel,
    };
    console.log(signUpModel);
    axios
      .request(config)
      .then((response: { data: any }) => {
        setSignUpResponse(response.data);
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
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
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  placeholder="Firstname"
                  onChange={(e: any) => handleChange(e, "firstname")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  placeholder="Lastname"
                  onChange={(e: any) => handleChange(e, "lastname")}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  onChange={(e: any) => handleChange(e, "email")}
                />
              </div>
              <div className="mb">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e: any) => handleChange(e, "password")}
                />
              </div>
            </form>
            <button
              className="hex-button hover:bg-blue-800"
              onClick={handleClick}
            >
              Signup
            </button>
            <h3 className="text-red-500 text-xl font-semibold">
              {signUpResponse?.Response}
            </h3>
            <div className="flex flex-row items-center justify-center gap-2">
              <hr className="bg-black h-1 w-[150px]" />
              <h3> or </h3>
              <hr className="bg-black h-1 w-[150px]" />
            </div>
            <button
              className="flex flex-row gap-10 items-center justify-between"
              onClick={() => router.push("/login")}
            >
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
