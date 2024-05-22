'use client'
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await axios.get(
          "https://localhost:7018/WeatherForecast"
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching forecasts:", error);
      }
    }
    fetchAccounts();
  }, []);

  return ( <>
      <div className="w-full h-full flex justify-center items-center">
      <img src="/homepage.gif" alt="GIF is here" className="max-w-full max-h-full" />
    </div>
  </>
  );
}
