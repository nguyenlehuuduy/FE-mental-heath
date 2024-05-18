import React from "react";
import {
  HeaderLogin,
  LandingOne,
  LandingPage2,
  LandingPage3,
  LandingPage4,
  LandingPage5,
  LandingPage6,
} from "../../../../components";

const LandingPage = () => {
  return (
    <div>
      <div className="w-full h-[700px] bg-[#D7EFFF]">
        <div className="px-5 py-2">
          <LandingOne />
        </div>
      </div>
      <div className="w-full h-[700px] bg-[#ffffff] px-5 py-5">
        <LandingPage2 />
      </div>
      <div className="w-full h-[700px] bg-[#D7EFFF] px-5 py-5">
        <LandingPage3/>
      </div>
      <div className="w-full h-[700px] bg-[#ffffff] px-5 py-5">
        <LandingPage4 />
      </div>
      <div className="w-full h-[700px] bg-[#D7EFFF] px-5 py-5">
        <LandingPage5/>
      </div>
      <div className="w-full h-[300px] bg-[#ffffff] px-5 py-5">
        <LandingPage6/>
      </div>
    </div>
  );
};
export default LandingPage;
