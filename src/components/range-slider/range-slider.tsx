"use client";
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface SliderNumberProps {
  min: number;
  max: number;
  maxData: number;
  minData: number;
}

const SliderNumber: FunctionComponent<SliderNumberProps> = ({
  min,
  maxData,
  minData,
  max,
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
  const minToolTip = useRef<HTMLDivElement>(null);
  const maxToolTip = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const minPerсent = getPerсent(data.minValue);
    const maxPercent = getPerсent(data.maxValue);
    if (minToolTip.current) {
      minToolTip.current.style.left = `${minPerсent}%`;
    }
    if (maxToolTip.current) {
      maxToolTip.current.style.left = `${maxPercent}%`;
    }
    if (range.current) {
      range.current.style.left = `${minPerсent}%`;
      range.current.style.width = `${maxPercent - minPerсent}%`;
    }
  }, [data, getPerсent]);
  return (
    <div className="relative">
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
        <div className="absolute top-3" ref={minToolTip}>
          {data.minValue}
        </div>
        <div className="absolute top-3" ref={maxToolTip}>
          {data.maxValue}
        </div>
      </div>
    </div>
  );
};

export default SliderNumber;
