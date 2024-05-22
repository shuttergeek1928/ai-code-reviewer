"use client";
import React, { useState } from "react";
import { ReviewResponse } from "../models/responseModel";
import { RequestReviewModel } from "../models/requestModels";
const requestJson = {} as RequestReviewModel;
const responseJson = {} as ReviewResponse;

const Code = () => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [reviewedOutput, setReviewedOutput] = useState<ReviewResponse | null>(
    null
  );

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const handleClick = async () => {
    setReviewedOutput(null);
    requestJson.code_input = text;
    requestJson.email = "rutuja@gmail.com";

    const axios = require("axios");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/gpt",
      headers: {
        "Content-Type": "application/json",
      },
      data: requestJson,
    };

    axios
      .request(config)
      .then((response: { data: any }) => {
        setReviewedOutput(response.data);
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(function(){
        setLoading(false);
    });
  };

  const handleClear = async () => {
    setReviewedOutput(null);
    setText("");
  };

  console.log("Reviewed OP - ", reviewedOutput);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen px-8">
        <div className="flex flex-row w-full h-[80%] gap-14">
          <div className="w-1/2 rounded-lg border-2 border-gray-500">
            <textarea
              className="responsive-textarea"
              value={text}
              onChange={handleChange}
              rows={10} // You can adjust the number of rows as needed
              placeholder="Enter your code to review..."
            />
          </div>

          <div className="w-1/2 rounded-lg border-2 border-gray-500 ">
            <textarea
              className="responsive-textarea"
              value={reviewedOutput?.corrected_code ?? ""}
              rows={10} // You can adjust the number of rows as needed
              placeholder="Enter your code to review..."
            />
          </div>
          <div className="w-1/3 rounded-lg border-2 border-gray-500 p-4 overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Code Analysis</h1>
            <hr className="mb-4" />
            {reviewedOutput !== null && (
              <div className="flex flex-col font-medium gap-6 ">
                <li>Language: {reviewedOutput?.detected_language}</li>
                <li>Explanation: {reviewedOutput?.explanation}</li>
                <li>Code Accuracy: {reviewedOutput?.code_accuracy}</li>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-start w-full h-24 gap-10">
          <button
            className={`hex-button hover:bg-blue-800 ${
              text === "" ? "hover:bg-red-800" : ""
            }`}
            onClick={handleClick}
            disabled={text === ""}
          >
            Review
          </button>
          <button
            className="hex-button hover:bg-blue-800"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Code;
