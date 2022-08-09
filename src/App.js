import React, { useState, useId } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Main from "./components/Index";
import { userContext } from "./contexts/AppContext";

function App() {
   const [cardBackData, setCardBackData] = useState(null);
   const [cardFrontData, setCardFrontData] = useState(null);

   console.log(cardBackData, cardFrontData);

   const [formSubmited, setFormSubmited] = useState(false);

   // set state to inputs
   const [cardHolder, setCardHolder] = useState(null);
   const [cardNum, setCardNum] = useState(null);
   const [month, setMonth] = useState(null);
   const [year, setYear] = useState(null);
   const [cvc, setCvc] = useState(null);

   //  set id to inputs
   const cardHolderId = useId();
   const cardNumId = useId();
   const monthId = useId();
   const yearId = useId();
   const cvcId = useId();

   //  set error message if there is an error
   const [cardHolderErr, setCardHolderErr] = useState(null);
   const [cardNumErr, setCardNumErr] = useState(null);
   const [monthErr, setMonthErr] = useState(null);
   const [yearErr, setYearErr] = useState(null);
   const [cvcErr, setCvcErr] = useState(null);

   return (
      <>
         <div className="app-container">
            <userContext.Provider
               value={{
                  cardBackData,
                  setCardBackData,
                  cardFrontData,
                  setCardFrontData,
                  formSubmited,
                  setFormSubmited,
                  // form info
                  cardHolder,
                  setCardHolder,
                  cardNum,
                  setCardNum,
                  month,
                  setMonth,
                  year,
                  setYear,
                  cvc,
                  setCvc,
                  // form info ID
                  cardHolderId,
                  cardNumId,
                  monthId,
                  yearId,
                  cvcId,
                  // form error info
                  cardHolderErr,
                  setCardHolderErr,
                  cardNumErr,
                  setCardNumErr,
                  monthErr,
                  setMonthErr,
                  yearErr,
                  setYearErr,
                  cvcErr,
                  setCvcErr,
               }}
            >
               <div className="left-col">
                  <CardFront />
                  <CardBack />
               </div>
               <div className="right-col">
                  <Main />
               </div>
            </userContext.Provider>
         </div>
      </>
   );
}

export default App;
