import React from "react";

import { demoEvents } from "@/data";
import { Button } from "./ui/MovingBorders";
import { BiArrowToRight } from "react-icons/bi";



const DemoEvents = () => {
  return (
    <section>

      <div className="py-20 w-ful">
        <h1 className="heading text-center text-4xl md:text-6xl lg:text-6xl font-bold text-black">
          Our <span className="text-purple">Events Like</span>
        </h1>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {demoEvents.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 items-center">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5 items-center">
                  <h1 className=" text-xl md:text-2xl font-bold items-center text-white">
                    {card.title}
                  </h1>
                  <p className="text-start text-white mt-3 ">
                    {card.desc}
                  </p>
                  <a href="/events/watchEvents">
                  <div className="bg-gradient-to-tr from-cyan-500 to-green-200 hover:bg-gradient-to-br hover:from-emerald-400 hover:to-violet-300 mb-2 rounded-md lg:mx-3 lg:p-2 lg:mt-1 border border-blue-500 mx-6 p-2 mt-2 font-bold hover:text-white cursor-pointer">
                    Register Here
                  </div>
                  </a>
                </div>

              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoEvents;
