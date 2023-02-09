import React from "react";
import Button from "../components/Button";
import HomeDots from "../components/HomeDots";
import Container from "../layout/Container";
import teamPhoto from "../assets/bg/home_bg.svg";
import send from "../assets/icons/send.svg";
import group_dots_1 from "../assets/icons/group_dots.svg";
import group_dots_2 from "../assets/icons/group_dots_2.svg";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <HomeDots />
        <div className="text-center pt-10">
          <h1 className="md:text-[64px] text-[30px] md:max-w-[740px] mx-auto font-extrabold text-[#1D1D1D] md:leading-[87px] leading-[38px] md:tracking-[0.01px]">
            Make your dream business goal come true
          </h1>
          <p className="md:mt-6 mt-3 max-w-[400px] mx-auto text-[#464646] opacity-60 text-xl">
            Build and scale your business fast with our world-class senior
            developers
          </p>
          <a href="#">
            <Button className="md:mt-8 mt-5">Start Project</Button>
          </a>
        </div>
        <div className="md:mt-[100px] mt-[62px] flex justify-center">
          <div className="relative w-fit">
            <img src={teamPhoto} alt="teamPhoto" />
            <img
              className="absolute -left-[180px] top-[160px] md:flex hidden"
              src={send}
              alt="send"
            />
            <img
              className="absolute md:left-[100px] -right-2 -top-2 md:-top-5 -z-10"
              src={group_dots_1}
              alt="dots"
            />
            <img
              className="absolute md:left-[100px] -bottom-2 -left-2 md:-bottom-5 -z-10"
              src={group_dots_2}
              alt="dots"
            />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
