import type { NextPage } from "next";

export type Testimonials1Type = {
  className?: string;
};

const Testimonials1: NextPage<Testimonials1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-100 flex flex-row items-start justify-start pt-4 px-0 pb-10 box-border max-w-full z-20 mt-[-33px] text-left text-lg text-gray-900 font-bold sm:pb-5 sm:box-border ${className}`}
    >
      <div className="h-96 w-full relative hidden max-w-full">
        <div className="absolute top-0 left-0 rounded-lg bg-gray-100 box-border w-full h-full border border-gray-300" />
        <div className="absolute top-40 left-40 tracking-wide leading-10 font-light whitespace-pre-wrap inline-block w-1160">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className="absolute top-40 left-529 text-6xl font-semibold sm:text-3xl md:text-5xl">
          Add your own
        </div>
        <img
          className="absolute top-40 left-459 w-14 h-14 overflow-hidden"
          alt=""
          src="/add.svg"
        />
        <div className="absolute top-250 left-40 rounded-lg bg-gray-100 box-border w-40 h-10 whitespace-nowrap text-sm text-primary border border-primary">
          <div className="absolute top-2 left-7 leading-4 font-semibold">
            Add new
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 flex flex-row items-start justify-center py-20 px-5 box-border max-w-full z-30 text-5xl sm:pt-4 sm:pb-20 sm:box-border">
        <div className="w-full flex flex-row items-start justify-start p-10 box-border relative max-w-full">
          <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 rounded-lg bg-gray-100 box-border border border-gray-300" />
          <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-full z-10 sm:gap-4">
            <div className="flex flex-row items-start justify-start gap-6">
              <img
                className="h-14 w-14 relative overflow-hidden min-h-14"
                alt=""
                src="/add-1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <h2 className="m-0 h-9 relative text-inherit font-semibold">
                  Add your own
                </h2>
              </div>
            </div>
            <p className="m-0 self-stretch h-full relative text-lg tracking-wide leading-10 font-light whitespace-pre-wrap">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <div className="rounded-lg bg-gray-100 flex flex-row items-start justify-start py-2.5 px-7 whitespace-nowrap text-sm text-primary border border-primary">
              <b className="leading-4 font-semibold">Add new</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
