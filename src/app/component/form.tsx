'use client'
import React from "react";

interface Field {
  label: string;
  type: string;
  placeholder: string;
}

interface FormProps {
  fields: Field[];
}
import toggle from "../../../public/toggle.svg";
import Image from "next/image";
import eye from "../../../public/Eye.svg";
import check from "../../../public/Check-Circle.svg";
const Form: React.FC<FormProps> = ({ fields }) => {
  return (
    <div className="">
      {fields.map((field, index) => (
        <div key={index} className="py-4">
          <div className="text-[#1E1F20] py-4 leading-3 text-xs tracking-[1px] font-bold">
            {field.label}
          </div>
          {field.label === "EMAIL" ||
          field.label === "BUSINESS TYPE" ||
          field.label === "PASSWORD" ? (
            <div className="relative mt-1">
              <input
                type="text"
                className="text-sm text-[#646981] p-3 font-medium border rounded w-full pr-10"
                placeholder="davin.wong@mail.com"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {field.label === "EMAIL" && (
                  <Image
                    className="h-5 w-5 text-green-500"
                    alt="circle"
                    src={check}
                  />
                )}
                {field.label === "PASSWORD" && (
                  <Image
                    className="h-5 w-5 text-green-500"
                    alt="lock"
                    src={eye}
                  />
                )}
                {field.label === "BUSINESS TYPE" && (
                  <Image
                    className="h-5 w-5 text-green-500"
                    alt="toggle"
                    src={toggle}
                  />
                )}
              </div>
            </div>
          ) : (
            <input
              type={field.type}
              className="text-sm text-[#646981] p-3 font-medium border rounded w-full"
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      {/* <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full">
          Submit
        </button> */}
    </div>
  );
};

export default Form;
