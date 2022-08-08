import React from "react";
import cardBack from "./../assets/images/bg-card-back.png";

const CardBack = () => {
   return (
      <div className="card-back card-gen">
         <div className="card-body">
            <img src={cardBack} alt="card_back" />
            <div className="card-back-details">
               <p className="card-number">000</p>
            </div>
         </div>
      </div>
   );
};

export default CardBack;
