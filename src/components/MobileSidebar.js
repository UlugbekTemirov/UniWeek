import React, { useEffect } from "react";

const MobileSidebar = ({ pages, setSidebar }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:hidden flex bg-gray-900 flex-col justify-center h-screen w-full absolute z-10 top-0 right-0 items-center">
      <span
        onClick={() => {
          document.body.style.overflow = "initial";
          setSidebar(false);
        }}
        className="icon icon-cross bg-gray-100 absolute top-5 right-5"
      ></span>
      <ul className="flex flex-col text-center">
        {pages.map((page, index) => (
          <li className="text-2xl my-5 font-bold text-gray-100" key={index}>
            <a href={`#${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSidebar;
