import { useContext } from "react";
import cardFrontImage from "./../assets/images/bg-card-front.png";
import { userContext } from "../contexts/AppContext";

const CardFront = () => {
   const { cardFrontData } = useContext(userContext);

   // const cardnumber = cardFrontData?.cardNum
   //    .replace(/[^\dA-Z]/g, "")
   //    .replace(/(.{4})/g, "$1 ")
   //    .trim();

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
                  {cardFrontData?.cardNum === null
                     ? "0000 0000 0000 0000"
                     : cardFrontData?.cardNum}
               </p>
               <div className="card-holder-details">
                  <p>
                     {cardFrontData?.cardHolder === null
                        ? "Jane Appleseed"
                        : cardFrontData?.cardHolder}
                  </p>
                  <p>
                     {cardFrontData?.month === null
                        ? "00"
                        : cardFrontData?.month}
                     /
                     {cardFrontData?.year === null ? "00" : cardFrontData?.year}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardFront;
