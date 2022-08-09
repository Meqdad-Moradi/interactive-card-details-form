import React from "react";
import icon from "./../assets/images/icon-complete.svg";
import { userContext } from "../contexts/AppContext";
import { useContext } from "react";

const Complete = () => {
   const { setFormSubmited } = useContext(userContext);

   const addMore = () => {
      setFormSubmited(false);
   };
   return (
      <div className="complete">
         <div className="container">
            <img src={icon} alt="complete_icon" />
            <h2>thank you!</h2>
            <p>We've added your card details</p>
            <button className="btn" onClick={addMore}>
               Continue
            </button>
         </div>
      </div>
   );
};

export default Complete;
