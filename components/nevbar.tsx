// Imports
import type { NextPage } from "next";
import React, { useState } from "react";

// Define props type
export type FrameComponent2Type = {
  className?: string;
};

// Define component
const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border top-[0] z-[99] sticky max-w-full ${className}`}>
      <header className="flex-1 flex flex-row items-start justify-center py-2.5 px-5 box-border relative gap-[90px] max-w-full text-left text-xs text-darkgray font-text-sm-bold mq750:gap-[45px] mq450:gap-[22px]">
        {/* Menu Button for Small Screens */}
        <button onClick={toggleMenu} className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Conditional Rendering Based on Screen Size */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-md z-50">
            <div className="p-4">
              <a href="#" className="block p-2">Home</a>
              <a href="#" className="block p-2">About</a>
              <a href="#" className="block p-2">Services</a>
              <a href="#" className="block p-2">Contact</a>
            </div>
          </div>
        )}

        {/* Rest of the header content */}
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.08)] bg-grey-white" />
        <div className="w-[628px] flex flex-row items-start justify-start gap-[34.7px] max-w-full mq750:gap-[17px]">
          <img
            className="h-[60px] w-[293.3px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/hobbycue-logo@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="self-stretch flex flex-row lg:items-start items-end lg:justify-between py-0 pr-0 relative gap-[20px] z-[1]">
              <div className="h-full w-full mq1050:hidden absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-hover box-border mix-blend-normal border-[1px] border-solid border-grey-lighter" />
              <div className="flex flex-col items-start mq1050:hidden justify-start pt-3 px-0 pb-0">
                <a href="#" className="[text-decoration:none] relative leading-[16px] font-light text-[inherit] whitespace-nowrap z-[1]">
                  Search here...
                </a>
              </div>
              <div className="flex-grow"></div> {/* This will push the next item to the right */}
              <div className="h-10 w-10 relative z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-primary-full w-full h-full" />
                <img
                  className="absolute top-[12px] right-[12px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg w-4 h-4 overflow-hidden z-[1]"
                  alt=""
                  src="/icons8-search-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[525px] lg:flex lg:flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-sm text-base-black">
          <div className="self-stretch flex lg:flex-row items-start justify-between gap-[20px] z-[1]">
            <div className="flex flex-col lg:hidden items-start justify-start pt-2 px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/explore.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <a href="#" className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit]">
                    Explore
                  </a>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icons8-expand-arrow-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-col lg:hidden items-start justify-start pt-2 px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="h-6 w-6 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
                    alt=""
                    src="/hobbies.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-row items-center justify-center gap-[10px] z-[1]">
                    <img
                      className="h-[19px] w-[19px] relative"
                      alt=""
                      src="/polygon-3.svg"
                    />
                    <img
                      className="h-3 w-3 absolute !m-[0] top-[6px] left-[6px] rounded-12xs-4 z-[1]"
                      alt=""
                      src="/hobbies-star.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <a href="#" className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit]">
                    Hobbies
                  </a>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icons8-expand-arrow-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-col lg:hidden items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/bookmark-black-24dp-1.svg"
              />
            </div>
            <div className="flex flex-col items-start pt-2 px-0 pb-0 justify-end">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/notifications-black-24dp-1.svg"
              />
            </div>
            <div className="flex flex-col lg:hidden items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/product-3.svg"
              />
            </div>
            <div className="flex flex-row items-start lg:hidden justify-start text-primary-full">
              <div className="flex flex-row items-start justify-start pt-2.5 px-8 pb-3.5 relative whitespace-nowrap">
                <div className="h-full w-full  absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-white box-border border-[1px] border-solid border-primary-full" />
                <a href="#" className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] z-[1]">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
