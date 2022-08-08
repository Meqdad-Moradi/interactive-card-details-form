import React from "react";
import cardFront from "./../assets/images/bg-card-front.png";


const CardFront = () => {
   return (
      <div className="card-front card-gen">
         <div className="card-body">
            <img src={cardFront} alt="card_front" />
            <div className="card-front-header">
               <span className="circle first"></span>
               <span className="circle second"></span>
            </div>
            <div className="card-front-footer">
               <p className="card-number">0000 0000 0000 0000</p>
               <div className="card-holder-details">
                  <p>jane appleseed</p>
                  <p>00/00</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardFront;
