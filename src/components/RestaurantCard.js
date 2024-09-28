import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props ;
    const {name,
          costForTwo,
          cuisines,
          avgRating,
        cloudinaryImageId} = resData?.info ;

    return (
        <div className="card" style={{backgroundColor: "white"}}>
        <div className="card-img">
            <img className="img" 
            src={CDN_URL +cloudinaryImageId} />
        </div>
        <div className="card-text">
        <h3 className="text">{name}</h3>
        <h4>{costForTwo}</h4>        
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        </div>
        
        </div>
    )
}

export default RestaurantCard;