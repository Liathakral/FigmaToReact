import React from "react";
import rigthimage from "../../../public/Right Card.png";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Form from "../component/form";
import phonelogo from "../../../public/aseteraWhite.svg";

import CustomButton from "../component/button";
import SigninOptions from "../component/sign-in-options";
const Details = [
  { label: "COMPANY Name", type: "text", placeholder: "your name" },
  { label: "BUSINESS TYPE", type: "text", placeholder: "your name" },
  { label: "EMPLOYEES", type: "number", placeholder: "20" },
  { label: "PHONE", type: "number", placeholder: "+1-854638393" },
];
export default function LoginPage() {
  return (
    <main className="md:py-24 md:px-28 lg:px-32 sm:px-24 flex justify-center items-stretch  h-screen sm:h-auto md:min-h-[900px] w-screen">
      <div className="pt-10  md:hidden flex flex-col items-center">
        <Image className="" src={phonelogo} alt="logo" />
        <h1 className="text-white font-bold text-3xl mt-4">Asatera</h1>
      </div>
      <div className="flex md:flex-row flex-col bg-white justify-center items-stretch w-full md:rounded-l-3xl rounded-t-3xl md:relative h-auto md:h-full absolute bottom-0 md:min-h-[700px] min-h-[650px] md:top-0 top-64">
        <div className="flex-1 flex flex-col w-full h-full md:px-24  md:py-10 px-8 pt-8  ">
          <div className="flex items-center space-x-9">
            <Image
              className="hidden md:block  -mx-6 "
              src={logo}
              alt="logo"
              layout="relative"
            />
            <h1 className=" hidden md:block  text-[#03004D] font-bold text-3xl">
              Asatera
            </h1>
          </div>
          <h1 className="font-bold text-nowrap md:mt-[1.7rem] lg:text-2xl md:text-2xl sm:text-xl  md:pt-6  ">
            Create an account
          </h1>
          <p className=" font-medium text-[#7F85A2] lg:text-md   mt-[1rem] md:mb-[2rem] md:text-sm text-xs">
            Sign in to continue
          </p>
          <Form fields={Details} />

          <CustomButton name="Create an account" bg={true} />
          <button className=" text-[#8181A5]  text-sm leading-5 flex justify-center font-bold my-3">
            Already have an account? Login
          </button>

          <SigninOptions />
        </div>

        <div className="w-1/2 bg-black flex-none relative">
          <Image
            className="w-full h-full object-cover absolute inset-0"
            src={rigthimage}
            alt="Background"
            priority
          />
        </div>
      </div>
    </main>
  );
}
