import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  findATeacherCoachOrExpert?: string;
  connect?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propGap,
  propHeight,
  propDisplay,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const findATeacherStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={`flex-1 rounded-lg bg-grey-white box-border flex flex-col lg:flex-row items-start justify-start py-[38px] px-[43px] gap-[32px] max-w-full text-left text-5xl text-base-black font-text-sm-bold border-[1px] border-solid border-grey-light lg:gap-[16px] lg:pl-[21px] lg:pr-[21px] lg:box-border ${className}`}
      style={groupDivStyle}
    >
      <div className="w-full max-w-full lg:w-[608px] lg:h-[297px] relative rounded-lg bg-grey-white box-border hidden border-[1px] border-solid border-grey-light" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px] z-[1]"
            loading="lazy"
            alt=""
            src={groupsBlack24dp11}
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <b className="h-9 relative font-semibold inline-block z-[1] text-lgi">
              {people}
            </b>
          </div>
        </div>
        <p
          className="m-0 self-stretch h-[81px] relative text-lg font-light whitespace-pre-wrap inline-block z-[1]"
          style={findATeacherStyle}
        >
          {findATeacherCoachOrExpert}
        </p>
      </div>
      <div className="rounded-lg bg-grey-white flex flex-row items-start justify-start py-2.5 pr-[29px] pl-[30px] z-[1] text-sm text-primary-full border-[1px] border-solid border-primary-full">
        <b className="relative leading-[16px] font-semibold">{connect}</b>
      </div>
    </div>
  );
};

export default GroupComponent;
