import { useContext } from "react";
import cardFront from "./../assets/images/bg-card-front.png";
import { userContext } from "../contexts/AppContext";

const CardFront = () => {
   const value = useContext(userContext);

   return (
      <div className="card-front card-gen">
         <div className="card-body">
            <img src={cardFront} alt="card_front" />
            <div className="card-front-header">
               <span className="circle first"></span>
               <span className="circle second"></span>
            </div>
            <div className="card-front-footer">
               <p className="card-number">
                  {value.cardNum === null
                     ? "0000 0000 0000 0000"
                     : value.cardNum}
               </p>
               <div className="card-holder-details">
                  <p>
                     {value.cardHolder === null
                        ? "Jane Appleseed"
                        : value.cardHolder}
                  </p>
                  <p>
                     {value.month === null ? "00" : value.month}/
                     {value.year === null ? "00" : value.year}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardFront;
