import React from "react";
import cardBack from "./../assets/images/bg-card-back.png";

const CardBack = ({ cardBackData }) => {
   return (
      <div className="card-back card-gen">
         <div className="card-body">
            <img src={cardBack} alt="card_back" />
            <div className="card-back-details">
               <p className="card-number">
                  {cardBackData === null ? "000" : cardBackData}
               </p>
            </div>
         </div>
      </div>
   );
};

export default CardBack;
