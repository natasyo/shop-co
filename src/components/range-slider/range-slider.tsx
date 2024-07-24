"use client";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  maxData: number;
  minData: number;
  className?: string;
  onchange?: (min: number, max: number) => void;
}

const RangeSlider: FunctionComponent<RangeSliderProps> = ({
  min,
  maxData,
  minData,
  max,
  className,
  onchange,
}) => {
  const [data, setData] = useState<{ minValue: number; maxValue: number }>({
    minValue: minData,
    maxValue: maxData,
  });
  const getPerсent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [max, min]
  );
  const range = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const minToolTip = useRef<HTMLDivElement>(null);
  const maxToolTip = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const minPerсent = getPerсent(data.minValue);
    const maxPercent = getPerсent(data.maxValue);
    if (minToolTip.current) {
      const pos =
        20 * (minPerсent / 100 - 0.5) * -1 - minToolTip.current.offsetWidth / 2;
      minToolTip.current.style.left = `calc(${minPerсent}% + ${pos}px)`;
    }
    if (maxToolTip.current) {
      const pos =
        20 * (maxPercent / 100 - 0.5) * -1 - maxToolTip.current.offsetWidth / 2;
      maxToolTip.current.style.left = `calc(${maxPercent}% + ${pos}px)`;
    }
    if (range.current) {
      range.current.style.left = `${minPerсent}%`;
      range.current.style.width = `${maxPercent - minPerсent}%`;
    }
  }, [data, getPerсent]);

  useEffect(() => {
    if (onchange) onchange(data.minValue, data.maxValue);
  }, [data, onchange]);

  return (
    <div className={`relative ${className}`}>
      <div className="h-[1px]">
        <input
          type="range"
          className="absolute thumb z-10"
          min={min}
          max={max}
          value={data.minValue}
          onChange={(e) => {
            const value = Math.min(+e.target.value, data.maxValue + 1);
            setData({ ...data, minValue: value });
          }}
        />
        <input
          type="range"
          className="absolute thumb z-20"
          min={min}
          max={max}
          value={data.maxValue}
          onChange={(e) => {
            const value = Math.max(+e.target.value, data.minValue + 1);
            setData({ ...data, maxValue: value });
          }}
        />
      </div>
      <div className="w-full bg-grey rounded-full h-[6px] -mt-[3px] relative">
        <div
          className="h-full rounded-full bg-black absolute"
          ref={range}
        ></div>
        <div
          className="absolute top-3 text-sm font-medium mt-1"
          ref={minToolTip}
        >
          ${data.minValue}
        </div>
        <div
          className="absolute top-3 text-sm font-medium mt-1"
          ref={maxToolTip}
        >
          ${data.maxValue}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
