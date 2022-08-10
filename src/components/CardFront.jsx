import { useContext } from "react";
import cardFrontImage from "./../assets/images/bg-card-front.png";
import { userContext } from "../contexts/AppContext";

const CardFront = () => {
   const value = useContext(userContext);

   return (
      <div className="card-front card-gen">
         <div className="card-body">
            <img src={cardFrontImage} alt="card_front" />
            <div className="card-front-header">
               <span className="circle first"></span>
               <span className="circle second"></span>
            </div>
            <div className="card-front-footer">
               <p className="card-number">
                  {!value.cardData?.cardnumber
                     ? "0000 0000 0000 0000"
                     : value.cardData?.cardnumber}
               </p>
               <div className="card-holder-details">
                  <p>
                     {!value.cardData?.username
                        ? "Jane Appleseed"
                        : value.cardData?.username}
                  </p>
                  <p>
                     {!value.cardData?.month ? "00" : value.cardData?.month}/
                     {!value.cardData?.year ? "00" : value.cardData?.year}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardFront;
