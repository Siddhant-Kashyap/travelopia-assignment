import starRating from "../assets/icons8-rating-50.png";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const numStars = 5;

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-center">
      <div className="lg:w-1/3 p-4">
        <div className="flex justify-center items-center">
          <div className="mt-8">
            <h2 className="text-2xl font-roboto text-center">Excellent</h2>
            <div className="flex justify-center mt-2">
              {Array.from({ length: numStars }).map((_, index) => (
                <span key={index} className="mx-1">
                  <img width={30} src={starRating} alt="star" />
                </span>
              ))}
            </div>
            <p className="text-center text-xs mt-2 font-roboto">
              Based on 1,811 reviews
            </p>
            <h5 className="text-center text-sm mt-2 font-roboto">Trustpilot</h5>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 flex flex-col items-center lg:flex-row justify-center">
        <button className="lg:hidden">&#60;</button>
        <div className="flex justify-center lg:justify-between items-center w-full lg:w-auto overflow-x-auto">
          <ReviewCard
            rating={5}
            title={"An amazing trip to India..."}
            description={"We have just returned from India which..."}
            name={"Siddhant"}
            timeAgo={" 16 hours ago"}
          />
          <ReviewCard
            rating={5}
            title={"An amazing trip to India..."}
            description={"We have just returned from India which..."}
            name={"Siddhant"}
            timeAgo={" 16 hours ago"}
          />
          <ReviewCard
            rating={5}
            title={"An amazing trip to India..."}
            description={"We have just returned from India which..."}
            name={"Siddhant"}
            timeAgo={" 16 hours ago"}
          />
        </div>
        <button className="lg:hidden">&#62;</button>
      </div>
    </div>
  );
};

export default Reviews;
