import { Review } from "@/types/review";
import { FunctionComponent } from "react";
import Rating from "./rating";

interface ReviewItemProps {
  review: Review;
  isShowDate: boolean;
}

const ReviewItem: FunctionComponent<ReviewItemProps> = ({
  review,
  isShowDate,
}) => {
  return (
    <div
      className="border rounded-2.5xl p-6 lg:py-7 lg:px-8 w-[358px] h-[186px] lg:w-[400px!important]  2xl:w-[500px!important] lg:h-[240px] mx-[10px] overflow-clip"
      key={review.id}
    >
      <Rating count={review.rating} className="mb-4" />
      <p className="text-lg font-bold flex mr-1 mb-3">
        {review.reviewerName}
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
            fill="#01AB31"
          />
        </svg>
      </p>
      <div className="text-black text-opacity-60 text-sm lg:text-base">
        {review.reviewText}
      </div>
      {isShowDate && <p>Posted on {review.reviewDate.toDateString()}</p>}
    </div>
  );
};

export default ReviewItem;
