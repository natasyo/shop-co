"use client";
import ProductColor from "@/components/product/color/product-color";
import { FunctionComponent, useState } from "react";

interface FilterColorsProps {
  colors: string[];
}

const FilterColors: FunctionComponent<FilterColorsProps> = ({ colors }) => {
  const [filterColorsShow, setFilterColorsShow] = useState(false);
  return (
    <div className="">
      <ProductColor colors={colors} multiple={true} />
    </div>
  );
};

export default FilterColors;
