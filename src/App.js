import React, { useState } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Main from "./components/Index";
import { userContext } from "./contexts/AppContext";

function App() {
   // const [cardBackData, setCardBackData] = useState(null);
   // const [cardFrontData, setCardFrontData] = useState(null);

   const [cardData, setCardData] = useState(null);

   // console.log(cardBackData, cardFrontData);

   const [isFormFilled, setIsFormFilled] = useState(false);

   return (
      <>
         <div className="app-container">
            <userContext.Provider
               value={{
                  setIsFormFilled,
                  isFormFilled,
                  cardData,
                  setCardData,
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
