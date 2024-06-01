import React from "react";
import google from "../../../public/Google.png";
import twitter from "../../../public/Twitter.svg";
import github from "../../../public/github.png";
import Image from "next/image";
const SigninOptions = () => {
  return (
    <div className="flex justify-center h-10 space-x-1 mt-4">
      <button className="flex items-center   border border-gray-300 rounded-md shadow-sm">
        <div className="flex justify-center items-center w-10">
          <Image src={twitter} alt="twitter" />
        </div>
      </button>

      <button className="flex items-center    border border-gray-300 rounded-md shadow-sm">
        <div className="flex justify-center items-centet w-10 ">
          <Image src={google} alt="google" />
        </div>
      </button>

      <button className="flex items-center border border-gray-300 rounded-md shadow-sm">
        <div className="flex justify-center items-center w-10 ">
          <Image src={github} alt="github" />
        </div>
      </button>
      <span className=" mt-2.5  font-bold text-[#8181A5] translate-x-[1px] text-nowrap leading-5  text-xs">
        Or Sign in with
      </span>
    </div>
  );
};

export default SigninOptions;
