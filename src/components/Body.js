import RestaurantCard from "./RestaurantCard";

import {resList} from "../utils/mockData"

const Body = () => {
    return (
        <div className="res-container">
            <h1 className="search-bar">Search</h1>
              <div className="main-body">
               {resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
               </div>
        </div>
    )
}

export default Body;