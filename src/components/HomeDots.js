import { useState } from "react";
import circle1 from "../assets/icons/circle_bg1.svg";
import circle2 from "../assets/icons/circle_bg2.svg";

const HomeDots = () => {
  const [circle_1, setCircle_1] = useState({
    x: 1121,
    y: 417,
  });

  const [circle_2, setCircle_2] = useState({
    x: 94,
    y: 243,
  });

  const [circle_3, setCircle_3] = useState({
    x: 1321,
    y: 97,
  });

  const xCor = Math.round(Math.random() * 1100 + 50);
  const yCor = Math.round(Math.random() * 500 + 100);

  return (
    <div className="md:flex hidden">
      <img
        style={{ top: circle_1.y, left: circle_1.x }}
        alt=""
        onMouseOver={() => {
          setCircle_1((prev) => ({
            ...prev,
            x: xCor,
            y: yCor,
          }));
        }}
        className="absolute animate-updown duration-700 cursor-pointer"
        src={circle1}
      />
      <img
        style={{ top: circle_2.y, left: circle_2.x }}
        alt=""
        onMouseOver={() => {
          setCircle_2((prev) => ({
            ...prev,
            x: xCor,
            y: yCor,
          }));
        }}
        className="absolute animate-leftright duration-700 cursor-pointer top-[243px] left-[94px]"
        src={circle2}
      />
      <img
        style={{ top: circle_3.y, left: circle_3.x }}
        alt=""
        onMouseOver={() => {
          setCircle_3((prev) => ({
            ...prev,
            x: xCor,
            y: yCor,
          }));
        }}
        className="absolute animate-updown2 duration-700 cursor-pointer top-[97px] -right-[40px]"
        src={circle1}
      />
    </div>
  );
};

export default HomeDots;
