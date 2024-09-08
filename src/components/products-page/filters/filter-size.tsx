import Size from "@/components/product/size/size";
import { FunctionComponent } from "react";

interface FilterSizeProps {
  className: string;
  sizes: string[];
}

const FilterSize: FunctionComponent<FilterSizeProps> = ({
  sizes,
  className,
}) => {
  return (
    <>
      {/* {sizes.map((size) => (
        <Size size={size} key={size} />
      ))} */}
    </>
  );
};

export default FilterSize;
