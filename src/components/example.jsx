import React from "react";

export default function Example() {
    return(
        <div className="flex flex-col items-stretch px-5">
      <div className="bg-zinc-100 flex w-full items-stretch justify-between gap-0 pl-8 pr-5 py-px rounded-xl max-md:pl-5">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[0.72] object-contain object-center w-[188px] overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full mt-5 self-start"
        />
      </div>
      <div className="flex w-full items-stretch justify-between gap-5 mt-6">
        <div className="text-black text-center text-base font-bold whitespace-nowrap">
          Beige Vintage Shirt
        </div>
        <div className="text-black text-center text-xs font-semibold whitespace-nowrap self-start">
          Rs. 2099
        </div>
      </div>
      <div className="text-black text-center text-xs font-light w-full mt-2.5">
        Cotton, breathable, casual shirt
      </div>
      <div className="flex w-full items-stretch justify-between gap-1.5 mt-3">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[5] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-center text-xs font-light grow whitespace-nowrap self-start">
          (1023)
        </div>
      </div>
      <div className="text-neutral-500 text-center text-xs whitespace-nowrap border justify-center items-stretch mt-4 pl-5 pr-12 py-2.5 rounded-xl border-solid border-neutral-500 max-md:pr-5">
        Add to Cart
      </div>
    </div>
    );
}