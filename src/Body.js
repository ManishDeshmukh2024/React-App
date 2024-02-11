import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfRestaurant.length === 0) {
    console.log("1st Render with Empty Data")
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div>
        <button
          className="filter"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (item) => item.info.avgRatingString > 4.0
            );
            setListOfRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurent) => {
          return <RestaurantCard restroData={restaurent} />;
        })}
      </div>
    </div>
  );
};

export default Body;
