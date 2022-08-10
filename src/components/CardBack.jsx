import React, { useContext } from "react";
import cardBack from "./../assets/images/bg-card-back.png";
import { userContext } from "../contexts/AppContext";

const CardBack = () => {
   const value = useContext(userContext);
   
   return (
      <div className="card-back card-gen">
         <div className="card-body">
            <img src={cardBack} alt="card_back" />
            <div className="card-back-details">
               <p className="card-number">
                  {!value.cardData?.cvc ? "000" : value.cardData?.cvc}
               </p>
            </div>
         </div>
      </div>
   );
};

export default CardBack;
