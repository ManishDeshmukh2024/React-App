import { img_url } from "./../utils/constants";

const RestaurantCard = (props) => {
  const { restroData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restroData?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={img_url + cloudinaryImageId}></img>
      <h2 className="res-name">{name}</h2>
      <h3 className="cus-items">{cuisines.join(",")}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
