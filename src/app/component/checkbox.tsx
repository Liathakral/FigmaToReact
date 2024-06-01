import React from 'react';

const CustomCheckbox = () => {
  return (
    <div className="  ">
      <div >
        <label className="flex items-center w-full bg-slate-500 space-x-2 ">
          <input type="checkbox" className="  form-checkbox h-4 w-4  text-green-500 border-gray-300 rounded focus:ring-green-500"/>
          <span className=" text-xs  text-[#1C1D21] font-bold">This is a Business Account</span>
        </label>
       
        <label className="flex items-center  w-full space-x-2 ">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"  />
          <span className="font-bold text-xs">I agree with terms & conditions</span>
        </label>
      </div>
    </div>
  );
};

export default CustomCheckbox;
