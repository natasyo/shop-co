import { FunctionComponent } from "react";

interface SizeProps {
  size?: string;
  isChanged?: boolean;
  name?: string;
}

const Size: FunctionComponent<SizeProps> = ({ size, isChanged }) => {
  return (
    <label
      key={size}
      className={`py-3 px-6 rounded-full mr-3 cursor-pointer mb-3 ${
        isChanged ? "bg-black text-white" : "bg-grey text-black text-opacity-60"
      }`}
    >
      {size}
      <input
        type="radio"
        defaultChecked={isChanged}
        name="product-size"
        value={size}
        className="hidden"
        // onChange={(e) => setCurrentSize(e.target.value)}
      />
    </label>
  );
};

export default Size;
