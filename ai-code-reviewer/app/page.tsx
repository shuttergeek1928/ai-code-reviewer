import Image from "next/image";

export default function Home() {
  return ( <>
      <div className="w-full h-full flex justify-center items-center">
      <img src="/homepage.gif" alt="GIF is here" className="max-w-full max-h-full" />
    </div>
  </>
  );
}
