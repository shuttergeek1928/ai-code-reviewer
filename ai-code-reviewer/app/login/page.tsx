"use client";
import React, { useState } from "react";
import { RequestLoginModel } from "../models/requestModels";
import { LoginResponse } from "../models/responseModel";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [inputEmail, setInputEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginModel = {} as RequestLoginModel;
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(
    null
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: any
  ) => {
    if (type === "email") {
      setInputEmail(event.target.value);
    }
    if (type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleClick = async () => {
    loginModel.password = password;
    loginModel.email = inputEmail;
    const axios = require("axios");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: loginModel,
    };

    axios
      .request(config)
      .then((response: { data: any }) => {
        setLoginResponse(response.data);
        {
          loginResponse?.IsAuthenticated === "true"
            ? setUser(loginModel.email)
            : setUser(null);
        }
        {
          loginResponse?.IsAuthenticated === "true"
            ? router.push("/codereview")
            : "";
        }
        // {loginResponse?.IsAuthenticated === "true" ? console.log('true', loginResponse?.IsAuthenticated) : console.log('false', loginResponse?.IsAuthenticated)}
        console.log(loginResponse);
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
            src="/login-image2.png"
            alt="header image"
            width={650}
            height={650}
          />
        </div>
        <div className="flex">
          <div className="flex flex-col h-full justify-center items-center gap-8 p-2">
            <form className="">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e: any) => handleChange(e, "email")}
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
                  onChange={(e: any) => handleChange(e, "password")}
                />
                <a
                  className="inline-block align-baseline hex-text hover:text-blue-800"
                  href="/forgetpass"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <button
              className="hex-button hover:bg-blue-800"
              onClick={() => handleClick()}
            >
              Login
            </button>
            <h3 className="text-red-500 text-xl font-semibold">
              {loginResponse?.ErrorMessage}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
