import { FunctionComponent, useState } from "react";

interface ColorProps {
  color: string;
  type?: "checkbox" | "radio";
  name?: string;
  isChecked?: boolean;
}

const Color: FunctionComponent<ColorProps> = ({
  color,
  type,
  name,
  isChecked,
}) => {
  return (
    <label
      className="h-[37px] w-[37px] rounded-full flex justify-center items-center border"
      style={{ background: color }}
    >
      <input
        type={type || "radio"}
        name={name}
        checked={isChecked}
        value={color}
      />
    </label>
  );
};

export default Color;
