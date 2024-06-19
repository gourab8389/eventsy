// CompanyProvides.tsx

"use client";

import { provideItem } from "@/data";
import { DirectionAwareHover } from "./ui/DirectionAwareHover";

export function CompanyProvides() {
  return (
    <section className="flex flex-col items-center justify-between mx-2 text-center h-auto">
      <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-5xl mt-10 mb-5">
        We <span className="text-purple-500">Provides</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-10 lg:px-40 cursor-pointer">
        {provideItem.map(({ id, img }) => (
          <div key={id} className="flex flex-col w-full p-2 rounded-md bg-gradient-to-br from-teal-950 to-rose-950">
            <DirectionAwareHover id={id} imageUrl={img}>
              <p className="font-bold text-xl">In the mountains</p>
              <p className="font-normal text-sm">₹ 2000</p>
            </DirectionAwareHover>
            <button type="submit" className="bg-gradient-to-tr from-cyan-500 to-green-200 hover:bg-gradient-to-br hover:from-emerald-400 hover:to-violet-300 mb-2 rounded-md lg:mx-3 lg:p-2 lg:mt-1 border border-blue-500 mx-6 p-2 mt-2 font-bold hover:text-white">
                Explore Now...
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
