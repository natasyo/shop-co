"use client";

import { FunctionComponent, useState } from "react";

interface SizesProps {
  sizes: string[];
  defaulttSize?: string;
}

const Sizes: FunctionComponent<SizesProps> = ({ sizes, defaulttSize }) => {
  const [currentSize, setCurrentSize] = useState(defaulttSize);
  return (
    <div className="flex flex-wrap">
      {sizes.map((size) => (
        <label
          key={size}
          className={`py-3 px-6 rounded-full mr-3 cursor-pointer mb-3 ${
            currentSize == size
              ? "bg-black text-white"
              : "bg-grey text-black text-opacity-60"
          }`}
        >
          {size}
          <input
            type="radio"
            defaultChecked={currentSize == size}
            name="product-size"
            value={size}
            className="hidden"
            onChange={(e) => setCurrentSize(e.target.value)}
          />
        </label>
      ))}
    </div>
  );
};

export default Sizes;
function seState(defaulttSize: any): [any, any] {
  throw new Error("Function not implemented.");
}
