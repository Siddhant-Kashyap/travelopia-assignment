import starRating from "../assets/icons8-rating-50.png";

const ReviewCard = ({ rating, title, description, name, timeAgo }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <div key={i}>
            <img width={20} src={starRating} />
          </div>
        );
      } else {
        stars.push(
          <div key={i}>
            <img width={20} src={starRating} />
          </div>
        );
      }
    }
    return stars;
  };
  return (
    <>
      <div className="mt-8 p-4">
        {" "}
        <div className="flex">{renderStars()}</div>
        <h3 className="text-md font-roboto font-bold" >{title}</h3>
        <p className="font-roboto">{description}</p>
        <div>
          <span className="text-sm font-bold font-roboto text-gray-600">{name}</span>
          <span className="text-xs  font-roboto text-gray-600">{timeAgo}</span>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
