import React from "react";
import contactBg from "../images/The Classic All Steel 1551x702.jpg";

function contactPage() {
  return (
    <>
      {/* Title */}
      <div
        className="flex items-center justify-center h-[15rem] md:h-[20rem] xl:h-[25rem] bg-cover bg-bottom text-[4rem] text-slate-100 font-sans font-semibold"
        style={{
          backgroundImage: `url("${contactBg}")`,
          textShadow: "1px 1px 1px black",
        }}
      >
        <p>Contact Us</p>
      </div>

      {/* Contact */}
      <div className="grid grid-row-3 md:grid-rows-1 md:grid-cols-3 font-sans">
        <div className="row-span-1 md:col-span-1 bg-zinc-900 text-slate-50 p-12 space-y-4">
          <div className="text-[2rem]">Contact information</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 mx-2 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            (852) 3442 7423
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 inline-block mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            scope@cityu.edu.hk
          </div>
          <div className="pl-9 -indent-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 inline-block mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            2410, 2/F, Li Dak Sum Yip Yio Chin Academic Building (LI), City
            University of Hong Kong, Tat Chee Avenue, Kowloon, Hong Kong
          </div>
        </div>
        <div className="row-span-2 md:col-span-2 bg-slate-200 p-12 space-y-4">
          <div className="text-[2rem]">Send us a message</div>

          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div>
              <label>First Name</label>
              <input className="block w-full h-[1.75rem] rounded-md mt-2" />
            </div>
            <div>
              <label>Last Name</label>
              <input className="block w-full h-[1.75rem] rounded-md mt-2" />
            </div>
            <div>
              <label>E-mail</label>
              <input
                type={"email"}
                className="block w-full h-[1.75rem] rounded-md mt-2"
              />
            </div>
            <div>
              <label>Phone(optional)</label>
              <input
                type={"tel"}
                className="block w-full h-[1.75rem] rounded-md mt-2"
              />
            </div>
          </div>

          <div>
            <label>Subject</label>
            <input className="block w-full h-[1.75rem] rounded-md mt-2" />
          </div>
          <div>
            <label>Message</label>
            <textarea className="block w-full h-[6rem] rounded-md mt-2" />
          </div>
          <button className="border-solid bg-gray-900 text-slate-100 border-gray-900 border-2 rounded-md px-2 py-1">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default contactPage;
