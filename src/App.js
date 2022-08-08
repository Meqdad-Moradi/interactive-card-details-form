import React from "react";
import Main from "./components/Index";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";

function App() {
   return (
      <>
         <div className="app-container">
            <div className="left-col">
               <CardFront />
               <CardBack />
            </div>
            <div className="right-col">
               <Main />
            </div>
         </div>
      </>
   );
}

export default App;
