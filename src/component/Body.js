import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  useState(listOfRestaurant);

  console.log("BodyCalled", searchText);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    console.log("1st Render with Empty Data");
    return <Shimmer />;
  }
  //console.log("useOnlineStatus", useOnlineStatus());

  //const onlineStatus = useOnlineStatus;

  if (useOnlineStatus === false) return <h1>You are offline.</h1>;

  return (
    <div className="body">
      <div>
        <input
          type="text"
          className="txt-search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button
          className="btn-search"
          onClick={() => {
            const filteredRest = listOfRestaurant.filter((item) =>
              item.info.name.toUpperCase().includes(searchText.toUpperCase())
            );
            setFilteredListOfRestaurant(filteredRest);
          }}
        >
          Search
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (item) => item.info.avgRatingString >= 4.5
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredListOfRestaurant.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} restroData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
