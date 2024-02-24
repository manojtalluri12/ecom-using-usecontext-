import React from "react";
import "./cart.css";
import { useMydata } from "../../EcomContext/EcomContext";
const CartLeftCard = () => {
  const { cart } = useMydata();
  let sum = cart.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);
  return (
    <div className="cartleft">
      <div>
        <h1 className="pricedtails">PRICE DETAILS</h1>
        <hr></hr>
      </div>
      <div className="cartinsidegrid">
        <div className="padding">
          <p className="padding">Price ({cart.length} item)</p>
          <p className="padding">Discount</p>
          <p className="padding"> Delivery Charges</p>
        </div>
        <div className="padding">
          <p className="padding">
            <p>${sum}</p>
          </p>
          <p className="padding">{sum > 1000 ? "-$100" : "-$10"}</p>
          <p className="padding">
            <strike> ₹40</strike> Free
          </p>
        </div>
      </div>
      <hr />
      <div className="cartgrid">
        <p className="padding">Total Price</p>
        <p className="padding">
          ${sum > 1000 ? `${sum - 100}` : `${sum - 10}`}
        </p>
      </div>
    </div>
  );
};

export default CartLeftCard;
