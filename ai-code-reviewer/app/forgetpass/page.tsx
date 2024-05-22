// pages/forgot-password.tsx
"use client";
import Image from "next/image";
// pages/forgot-password.tsx
import { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        // Navigate to reset password page
        window.location.href = "/resetpass";
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      setMessage("An error occurred while sending reset link");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen gap-40">
      <div>
        <Image
          src="/forgetpass.png"
          alt="forget image"
          width={550}
          height={250}
        />
      </div>
      <div className="flex">
      <div className="flex flex-col bg-white rounded shadow-md h-full gap-8 p-2">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
