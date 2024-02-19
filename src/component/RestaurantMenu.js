import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restMenuList, setRestMenuList] = useState(null);
  const [name, setName] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [costForTwo, setCostForTwo] = useState("");
  const [itemCards, setItemCards] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        params.resId
    );
    const dataJson = await data.json();
    console.log(dataJson);
    const { name, cuisines, costForTwoMessage } =
      dataJson?.data?.cards[0]?.card?.card?.info;
    setName(name);
    setCuisines(cuisines);
    setCostForTwo(costForTwoMessage);

    const { itemCards } =
      dataJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card;
    setItemCards(itemCards);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ") + " - Rs. " + costForTwo}</h3>

      <ul>
        {itemCards.map((data) => (
          <li key={data.card.info.id}>
            {data.card.info.name} - Rs. {data.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
