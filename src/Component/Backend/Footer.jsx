import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" text-center col-span-full w-full bg-[#331A15] text-white py-5 px-5">
        <p>
          © {new Date().getFullYear()} Admin Dashboard — All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
