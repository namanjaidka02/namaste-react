import UseListOfRestaurants from "../utils/useListOfRestaurants";
import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfRes, filteredRes, setFilteredRes } = UseListOfRestaurants();

  console.log("Body rendereds", listOfRes);

  const onlineStatus = UseOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks Like you are offline!!</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI

              const filteredRestaurants = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestaurants);

              setSearchText("");
            }}
          >
            Search{" "}
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );

            setFilteredRes(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <label>UserName:</label>
        <input
          type="text"
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container">
        {filteredRes.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurentCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
