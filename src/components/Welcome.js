import React, { useEffect, useState } from "react";
import logo from "../assets/icons/uniweek.svg";
import logo_audio from "../assets/music/logo_music.mp3";

const Welcome = () => {
  const [animation, setAnimation] = useState(false);
  const [close, setClose] = useState(false);
  const [fullyClose, setFullyClose] = useState(false);
  const audio = new Audio(logo_audio);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      audio.play();
    }, 700);
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
    setTimeout(() => {
      setClose(true);
      document.body.style.overflow = "initial";
    }, 3500);
    setTimeout(() => {
      setFullyClose(true);
    }, 4000);
  }, []);

  if (fullyClose) return;
  return (
    <React.Fragment>
      <div
        className={`absolute top-0 left-0 bg-gray-900 w-full h-full z-20 duration-700 ${
          close ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 duration-700 flex items-center md:flex-row flex-col ${
          close ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
          src={logo}
        />
        <em
          className={`ml-1 logo duration-1000 overflow-hidden text-white md:text-6xl text-3xl md:text-left text-center md:mt-0 mt-5 ${
            animation ? "md:w-[380px] w-[200px]" : "w-0"
          }`}
        >
          <h1 className="font-extrabold">UniWeek</h1>
          <p className="py-2 font-thin text-white/[0.5]">Technologies</p>
        </em>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
