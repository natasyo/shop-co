"use client";
import { getReviews } from "@/services/reviews-service";
import { Review } from "@/types/review";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Loader from "../../loader/loader";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ReviewItem from "./review-item";
import NextArrow from "@/components/arrows/next-arrow";
import PrevArrow from "@/components/arrows/prev-arrow";

interface OurCostumersProps {
  className: string;
}

const OurCostumers: FunctionComponent<OurCostumersProps> = ({ className }) => {
  const slider = useRef<Slider>(null);

  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [mount, setMount] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setMount(true);
    setLoading(true);
    getReviews()
      .then((result) => {
        setReviews(result);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  if (!mount) return <Loader />;
  return (
    <div className={className}>
      <div className="container mx-auto flex justify-between">
        <h2 className="mb-10">OUR HAPPY CUSTOMERS</h2>
        <div className="flex">
          <PrevArrow
            onClick={() => {
              slider.current?.slickPrev();
            }}
            className="mr-4"
          />
          <NextArrow
            onClick={() => {
              slider.current?.slickNext();
            }}
          />
        </div>
      </div>
      <div className="">
        <Slider
          ref={slider}
          className="center"
          slidesToShow={3}
          slidesToScroll={1}
          infinite={true}
          centerMode={true}
          swipeToSlide={true}
          variableWidth={true}
          autoplay={true}
          arrows={true}
        >
          {reviews?.map((review) => (
            <ReviewItem key={review.id} review={review} isShowDate={false} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurCostumers;