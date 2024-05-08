import Link from "next/link";
import React from "react";
import Image from "next/image";

const navlinks = [
  { image: "/coding.png", url: "/login", name: "coding" },
  { image: "/graph.png", url: "/trends", name: "trends" },
  { image: "/history.png", url: "/history", name: "history" },
  { image: "/chatbot.png", url: "/chatbot", name: "chatbot" },
  { image: "/settings.png", url: "/settings", name: "settings" },
];

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-evenly m-2 p-2 border-4 rounded-lg bg-red-400 w-24 h-[600px]">
        {navlinks.map((navs) => (
            <div>
              <Link href={navs.url} key={navs.name}>
                <Image
                  src={navs.image}
                  alt={navs.name}
                  width={75}
                  height={75}
                />
              </Link>
            </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
