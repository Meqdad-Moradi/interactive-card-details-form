import React, { useId, useState } from "react";
import { useEffect } from "react";
import Input from "./Input";

const Form = () => {
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

   const handleSubmit = (e) => {
      e.preventDefault();

      !cardHolder
         ? setCardHolderErr("Plase insert your name")
         : setCardHolderErr(null);

      !cardNum
         ? setCardNumErr("Wrong format, numbers only")
         : setCardNumErr(null);

      !month ? setMonthErr("Can't be blank") : setMonthErr(null);
      !year ? setYearErr("Can't be blank") : setYearErr(null);
      !cvc ? setCvcErr("Can't be blank") : setCvcErr(null);
   };

   return (
      <div className="main-form">
         <form onSubmit={handleSubmit}>
            <Input
               id={cardHolderId}
               label="Cardholder name"
               type="text"
               error={cardHolderErr}
               inputName="cardholder"
               inputData={(e) => setCardHolder(e.target.value)}
               placeHolder="e.g. Jane Appleseed"
            />

            <Input
               id={cardNumId}
               label="Card Number"
               type="number"
               error={cardNumErr}
               inputName="cardholderNumber"
               inputData={(e) => setCardNum(e.target.value)}
               placeHolder="e.g. 1234 5678 9123 0000"
            />

            <div className="expire-date">
               <p>Exp. date (MM/YY) CVC</p>

               <div className="inputs">
                  <Input
                     id={monthId}
                     type="number"
                     error={monthErr}
                     inputName="month"
                     inputData={(e) => setMonth(e.target.value)}
                     placeHolder="MM"
                  />

                  <Input
                     id={yearId}
                     type="number"
                     error={yearErr}
                     inputName="year"
                     inputData={(e) => setYear(e.target.value)}
                     placeHolder="YY"
                  />
                  <Input
                     id={cvcId}
                     type="number"
                     error={cvcErr}
                     inputName="cvc"
                     inputData={(e) => setCvc(e.target.value)}
                     placeHolder="e.g. 123"
                  />
               </div>
            </div>

            <button className="confirm-btn" type="submit">
               Confirm
            </button>
         </form>
      </div>
   );
};

export default Form;
