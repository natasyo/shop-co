"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import Color from "./color";

interface ProductColorProps {
  colors: string[];
  currentColor?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  multiple?: boolean;
}

const ProductColor: FunctionComponent<ProductColorProps> = ({
  colors,
  currentColor,
  onChange,
  multiple,
  className,
}) => {
  const [colorCurrent, setColorCurrent] = useState<string | undefined>(
    currentColor
  );
  const refCheckBox = useRef(null);

  useEffect(() => {
    console.log(colorCurrent);
    console.log(multiple);
  }, [colorCurrent, multiple]);

  return (
    <div className={`grid grid-cols-5  -mx-2 -my-2 ${className}`}>
      {colors.map((color, index) => {
        return (
          <Color
            key={color}
            value={color}
            name="product-color"
            className={`m-2`}
            isChecked={colorCurrent ? colorCurrent === color : index === 0}
            onChangeColor={(value) => {
              console.log(value);
              setColorCurrent(value);
              console.log();
            }}
          />
        );
      })}
    </div>
  );
};

export default ProductColor;
