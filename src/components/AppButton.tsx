import { useState } from "react";

const AppButton = () => {
  const [isHover, setIsHover] = useState(false);

  const hover = () => {
    setIsHover(!isHover);
  };
  return (
    <div className="flex justify-center w-full">
      <div
        className="bg-black w-[350px] h-[50px] rounded-[50px] flex relative"
        onClick={() => {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share";
        }}
      >
        <div
          className={`absolute inset-0 rounded-[50px] min-w-[120px] md:min-w-[170px] bg-primaryRed transition-all duration-500 ${
            isHover ? "w-full" : "w-[0px] md:w-[51px]"
          }`}
        ></div>
        <button className="z-10 h-full w-[120px] md:w-[171px] rounded-[50px] text-white text-[14px] font-medium text-xs">
          Download
        </button>
        <button
          className="z-10 flex items-center justify-center h-full flex-grow gap-3 rounded-[50px]"
          onMouseEnter={hover}
          onMouseLeave={hover}
        >
          <span className="text-white text-[14px] font-medium text-xs">
            The App Version
          </span>
          <svg
            className="w-[24px] h-[24px]"
            width="15px"
            height="16px"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.01855 4.20605L12.8123 7.9998L9.01855 11.7936"
              stroke="white"
              strokeWidth="0.9375"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.1875 8H12.7062"
              stroke="white"
              strokeWidth="0.9375"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppButton;
