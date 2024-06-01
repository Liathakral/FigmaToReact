"use client";
import React from "react";
import rigthimage from "../../public/Right Card.png";
import Image from "next/image";
import logo from "../../public/aseteraWhite.svg";
import logo2 from "../../public/logo.svg";
import Form from "./component/form";

import SigninOptions from "./component/sign-in-options";
import CustomButton from "./component/button";
import { useRouter } from "next/navigation";

const loginFields = [
  { label: "EMAIL", type: "email", placeholder: "davin.wong@mail.com" },
  { label: "PASSWORD", type: "password", placeholder: "******" },
];
export default function LoginPage() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/passwordrecovery");
  };
  return (
    <main className="md:py-24 md:px-28 lg:px-32 sm:px-24 flex justify-center items-stretch  h-screen sm:h-auto md:min-h-[900px] w-screen">
      <div className="pt-10  md:hidden flex flex-col items-center">
        <Image className="" src={logo} alt="logo" />
        <h1 className="text-white font-bold text-3xl mt-4">Asatera</h1>
      </div>
      <div className="flex md:flex-row flex-col bg-white justify-center items-stretch w-full md:rounded-l-3xl md:min-h-[600px] min-h-[550px] rounded-t-3xl md:relative h-auto md:h-full absolute bottom-0 md:top-0 top-64 ">
        <div className="flex-1 flex flex-col w-full h-full md:px-24  md:py-10  pt-10 px-10 ">
          <div className="flex items-center space-x-9">
            <Image
              className="hidden md:block  -mx-6 "
              src={logo2}
              alt="logo"
              layout="relative"
            />
            <h1 className=" hidden md:block  text-[#03004D] font-bold text-3xl">
              Asatera
            </h1>
          </div>
          <h1 className="text-nowrap md:mt-[1.7rem] lg:text-2xl md:text-2xl sm:text-xl  md:pt-6 text-[#1E1F20]">
          Welcome Back!
          </h1>
          <p className=" text-[#7F85A2] lg:text-md   mt-[0.5rem] md:text-sm text-xs">
            Login to continue
          </p>
          <Form fields={loginFields} />
          <div className="flex justify-end w-full">
            <button
              onClick={handleOnClick}
              className="text-[#8181A5] md:block hidden text-sm leading-5 font-bold my-3"
            >
              Forget password?
            </button>
          </div>
          <CustomButton name="Login" bg={true} />
          <button
            onClick={handleOnClick}
            className=" text-[#8181A5] md:hidden  text-sm leading-5 flex justify-center font-bold my-3"
          >
            Forget password?
          </button>
          <CustomButton name="Create an account" bg={false} />
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
