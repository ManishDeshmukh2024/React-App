import { useParams } from "react-router-dom";
import useRestuarantMenu from "./../../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dataJson = useRestuarantMenu(resId);

  console.log(dataJson);

  if (dataJson === null) return <Shimmer />;
  const { cuisines, costForTwoMessage } =
    dataJson?.data?.cards[2]?.card?.card?.info;
  const nameVal = dataJson?.data?.cards[2]?.card?.card?.info.name;
  // setCuisines(cuisines);
  // setCostForTwo(costForTwoMessage);

  const { itemCards } =
    dataJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // setItemCards(itemCards);

  return (
    <div>
      <h1>{nameVal}</h1>
      <h3>{cuisines.join(", ") + " - Rs. " + costForTwoMessage}</h3>

      <ul>
        {itemCards.map((data) => (
          <li key={data.card.info.id}>
            {data.card.info.name} - Rs.
            {data.card.info.defaultPrice / 100 || data.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
