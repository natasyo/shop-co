"use client";
import RangeSlider from "@/components/range-slider/range-slider";
import { useState } from "react";

function RangePrice() {
  const [rangePriceShow, setRangePriceShow] = useState(false);
  return (
    <div className="pt-6">
      <p
        className="text-black text-lg font-bold flex justify-between items-center"
        onClick={() => setRangePriceShow(!rangePriceShow)}
      >
        <span>Price</span>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            rangePriceShow
              ? "rotate-90 transition-transform"
              : "transition-transform"
          }`}
        >
          <path
            d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </p>
      <RangeSlider
        minData={30}
        maxData={80}
        min={0}
        max={100}
        onchange={(min, max) => console.log(min, max)}
        className={
          rangePriceShow
            ? "mt-8 pb-10 border-b transition-all max-h-96"
            : "max-h-0 hidden transition-all"
        }
      />
    </div>
  );
}

export default RangePrice;
