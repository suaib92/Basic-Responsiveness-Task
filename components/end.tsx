import type { NextPage } from "next";

export type EndType = {
  className?: string;
};

const End: NextPage<EndType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-blue-2 flex flex-col items-start justify-start pt-[100px] pb-[30px] pr-3.5 pl-[100px] box-border gap-[71px] max-w-full text-left text-17xl text-base-black font-text-sm-bold mq750:gap-[35px] mq750:pl-[50px] mq750:pt-[65px] mq750:pb-5 mq750:box-border mq450:gap-[18px] mq450:pl-5 mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[662px] relative bg-blue-2 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
        <h1 className="m-0 h-[54px] relative text-inherit inline-block italic font-medium font-inherit max-w-full z-[1] mq1050:text-10xl mq450:text-3xl">
          <span>{`Your `}</span>
          <span className="text-primary-full">Hobby</span>
          <span>{`, Your `}</span>
          <span className="text-blue-1">Community...</span>
        </h1>
        <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full text-xl text-grey-white">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[1300px] flex flex-row items-end justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                <div className="rounded-lg bg-primary-full overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
                  <b className="h-[30px] relative font-semibold inline-block">
                    Get started
                  </b>
                </div>
              </div>
              <div className="h-10 w-10 relative z-[2] flex items-center justify-center">
                <img
                  className="h-full w-full z-[2] object-contain absolute left-[0px] top-[8px] [transform:scale(1.6)]"
                  loading="lazy"
                  alt=""
                  src="/group-77.svg"
                />
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_5px_rgba(120,_120,_120,_0.14)] rounded-sm bg-grey-white flex flex-row items-start justify-start py-[3px] px-1 whitespace-nowrap z-[1] text-3xs text-primary-full">
            <div className="relative tracking-[0.04em] leading-[12px] font-medium">
              Go to top (Ctrl+Home)
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1260px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[71px] max-w-full lg:flex-wrap mq750:gap-[35px] mq450:gap-[18px]">
        <div className="h-[281px] w-[531px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[531px] max-w-full lg:flex-1 mq750:min-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1] lg:self-stretch lg:w-auto"
            loading="lazy"
            alt=""
            src="/5820098-1.svg"
          />
        </div>
        <img
          className="h-[302px] flex-1 relative max-w-full overflow-hidden min-w-[415px] z-[1] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/5820000-1.svg"
        />
      </div>
    </div>
  );
};

export default End;
