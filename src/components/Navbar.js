import Container from "../layout/Container";
import logo from "../assets/icons/uniweek.svg";
import bg_1 from "../assets/bg/top_left_green.svg";
import bg_2 from "../assets/bg/top_right_green.svg";
import MobileSidebar from "./MobileSidebar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pages = ["Home", "About", "Services", "Projects"];

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    console.log(window.location);
  }, [window.location]);

  return (
    <section>
      <Container>
        <img
          className="absolute -top-[100px] -left-[50px] opacity-40 -z-10 xl:w-[2000px] w-[1000px] md:flex hidden"
          src={bg_1}
          alt="bg1"
        />
        <img
          className="absolute -top-[300px] -right-[50px] opacity-40 -z-10 xl:w-[2000px] w-[1000px] md:flex hidden"
          src={bg_2}
          alt="bg2"
        />
        <nav className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <img
              className="md:w-[60px] md:h-[60px] w-[32px] h-[32px]"
              src={logo}
              alt="logo"
            />
            <em className="md:ml-2 ml-1 md:text-xl text-md quicksand text-[#1D1D1D]">
              <h1 className="font-bold -mb-[6px]">UniWeek</h1>
              <p className="opacity-70">Technologies</p>
            </em>
          </div>
          <ul className="md:flex hidden items-center">
            {pages.map((page, index) => (
              <li
                className="mr-[50px] text-lg text-[#1D1D1D] last:mr-0 pagelink"
                key={index}
              >
                <a href={`#${page}`}>{page}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <a
              href="#"
              className="bg-[#00BF59] cursor-pointer md:px-[50px] px-5 py-2 font-bold text-white md:text-lg text-md rounded-xl quicksand"
            >
              Get Started!
            </a>
            <span
              className="icon icon-hamburger bg-gray-900 md:hidden ml-1 cursor-pointer"
              onClick={() => setSidebar(true)}
            ></span>
          </div>
          {sidebar ? (
            <MobileSidebar setSidebar={setSidebar} pages={pages} />
          ) : null}
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;
