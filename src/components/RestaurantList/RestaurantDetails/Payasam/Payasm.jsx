import { IMAGE_URL } from "../../../../../Constant";
import "./Payasam.css";

const Payasm = (item) => {
  return (
    <div className="top">
      <div className="top__Data">
        <h2>{item?.card?.info?.name}</h2>
        {item?.card?.info?.defaultPrice?.toString().slice(0, 3) ? (
          <p className="topData__price">
            ₹{item?.card?.info?.defaultPrice?.toString().slice(0, 3)}
          </p>
        ) : (
          <p className="topData__price">
            ₹{item?.card?.info?.price?.toString().slice(0, 3)}{" "}
          </p>
        )}
        <p className="topData__category">
          Category : {item?.card?.info?.category}
        </p>
      </div>

      <div>
        <img src={`${IMAGE_URL}/${item?.card?.info?.imageId}`} />
      </div>
    </div>
  );
};

export default Payasm;
