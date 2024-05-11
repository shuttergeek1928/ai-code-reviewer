import Link from "next/link";
import React from "react";

const navlinks = [
  { image: "/coding.png", url: "/codereview", name: "coding" },
  { image: "/graph.png", url: "/trends", name: "trends" },
  { image: "/history.png", url: "/history", name: "history" },
  { image: "/chatbot.png", url: "/chatbot", name: "chatbot" },
  { image: "/settings.png", url: "/setting", name: "settings" },
];

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between mx-2 px-4 py-8 border-r-4 w-28 box-border">
        {navlinks.map((navs) => (
            <div>
              <Link href={navs.url} key={navs.name}>
                <img
                  src={navs.image}
                  alt={navs.name}
                />
              </Link>
            </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
