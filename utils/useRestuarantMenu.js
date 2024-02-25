import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestuarantMenu = (resId) => {
  console.log("INside useRestuarantMenu", resId);

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    console.log("data", data);
    const dataJson = await data.json();
    console.log(dataJson);
    setResInfo(dataJson);

    console.log(":resInfo", resInfo);
  };
  return resInfo;
};
export default useRestuarantMenu;
