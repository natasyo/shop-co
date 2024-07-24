"use client";
import {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";

interface ProductColorProps {
  colors: string[];
  currentColor?: string[] | string;
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
  const [colorCurrent, setColorCurrent] = useState<
    string[] | string | undefined
  >(currentColor);
  const refCheckBox = useRef(null);
  function changeColor(e: ChangeEvent<HTMLInputElement>) {
    if (multiple) {
      if (colorCurrent === undefined) {
        setColorCurrent([e.target.value]);
      } else if (
        colorCurrent.indexOf(e.target.value) >= 0 &&
        colorCurrent instanceof Array
      ) {
        colorCurrent.splice(colorCurrent.indexOf(e.target.value), 1);
        setColorCurrent([...colorCurrent]);
      } else {
        colorCurrent instanceof Array &&
          setColorCurrent([...colorCurrent, e.target.value]);
      }
    } else {
      setColorCurrent(e.target.value);
    }
  }

  useEffect(() => {
    console.log(colorCurrent);
    console.log(multiple);
  }, [colorCurrent, multiple]);

  return (
    <div className={className}>
      <p className="text-black text-opacity-60 mb-4">Select Colors</p>
      <div className="flex flex-wrap -mx-2 -my-2">
        {colors.map((color) => {
          return (
            <label
              key={color}
              className={`h-[37px] w-[37px] flex items-center justify-center rounded-full cursor-pointer border mx-2 my-2`}
              style={{ backgroundColor: color }}
            >
              {colorCurrent instanceof Array &&
                colorCurrent?.indexOf(color) >= 0 && (
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                  >
                    <path
                      d="M13.5306 2.03063L5.5306 10.0306C5.46092 10.1006 5.37813 10.156 5.28696 10.1939C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1939C4.62057 10.156 4.53778 10.1006 4.4681 10.0306L0.968098 6.53063C0.898333 6.46087 0.842993 6.37804 0.805236 6.28689C0.76748 6.19574 0.748047 6.09804 0.748047 5.99938C0.748047 5.90072 0.76748 5.80302 0.805236 5.71187C0.842993 5.62072 0.898333 5.53789 0.968098 5.46813C1.03786 5.39837 1.12069 5.34302 1.21184 5.30527C1.30299 5.26751 1.40069 5.24808 1.49935 5.24808C1.59801 5.24808 1.69571 5.26751 1.78686 5.30527C1.87801 5.34302 1.96083 5.39837 2.0306 5.46813L4.99997 8.4375L12.4693 0.969379C12.6102 0.828483 12.8013 0.749329 13.0006 0.749329C13.1999 0.749329 13.391 0.828483 13.5318 0.969379C13.6727 1.11028 13.7519 1.30137 13.7519 1.50063C13.7519 1.69989 13.6727 1.89098 13.5318 2.03188L13.5306 2.03063Z"
                      fill="white"
                    />
                  </svg>
                )}
              {multiple ? (
                <input
                  type="checkbox"
                  name="product-color"
                  defaultChecked={
                    colorCurrent !== undefined &&
                    colorCurrent?.indexOf(color) >= 0
                  }
                  className="hidden cursor-pointer"
                  onChange={changeColor}
                  value={color}
                  ref={refCheckBox}
                />
              ) : (
                <input
                  type="radio"
                  name="product-color"
                  defaultChecked={colorCurrent == color}
                  className="hidden cursor-pointer"
                  onChange={changeColor}
                  value={color}
                />
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColor;
