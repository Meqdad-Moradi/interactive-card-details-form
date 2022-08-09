import React, { useContext } from "react";
import { useEffect } from "react";
import { userContext } from "../contexts/AppContext";
import Input from "./Input";

const Form = () => {
   const formData = useContext(userContext);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         !formData.cardHolder ||
         !formData.cardNum ||
         !formData.month ||
         !formData.year ||
         !formData.cvc
      ) {
         !formData.cardHolder
            ? formData.setCardHolderErr("Plase insert your name")
            : formData.setCardHolderErr(null);

         !formData.cardNum
            ? formData.setCardNumErr("Wrong format, numbers only")
            : formData.setCardNumErr(null);

         !formData.month
            ? formData.setMonthErr("Can't be blank")
            : formData.setMonthErr(null);
         !formData.year
            ? formData.setYearErr("Can't be blank")
            : formData.setYearErr(null);
         !formData.cvc
            ? formData.setCvcErr("Can't be blank")
            : formData.setCvcErr(null);
      } else {
         // toggle the form if all fields are correct and submited
         formData.setFormSubmited(true);

         // set data for card front
         formData.setCardFrontData({
            cardHolder: formData.cardHolder,
            cardNum: formData.cardNum,
            month: formData.month,
            year: formData.year,
         });

         // set data for card back
         formData.setCardBackData(formData.cvc);

         // set all fields to null after form submited
         formData.setCardHolder(null);
         formData.setCardNum(null);
         formData.setMonth(null);
         formData.setYear(null);
         formData.setCvc(null);
      }
   };

   // clear error message if the fields are filled
   useEffect(() => {
      formData.setCardHolderErr(null);
   }, [formData.cardHolder]);

   useEffect(() => {
      formData.setCardNumErr(null);
   }, [formData.cardNum]);

   useEffect(() => {
      formData.setMonthErr(null);
   }, [formData.month]);

   useEffect(() => {
      formData.setYearErr(null);
   }, [formData.year]);

   useEffect(() => {
      formData.setCvcErr(null);
   }, [formData.cvc]);

   return (
      <div className="main-form">
         <form onSubmit={(e) => handleSubmit(e)}>
            <Input
               id={formData.cardHolderId}
               label="Cardholder name"
               type="text"
               error={formData.cardHolderErr}
               inputName="cardholder"
               inputData={(e) => formData.setCardHolder(e.target.value)}
               placeHolder="e.g. Jane Appleseed"
            />

            <Input
               id={formData.cardNumId}
               label="Card Number"
               type="number"
               error={formData.cardNumErr}
               inputName="cardholderNumber"
               inputData={(e) =>
                  formData.setCardNum(
                     e.target.value
                        .replace(/[^\dA-Z]/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                  )
               }
               placeHolder="e.g. 1234 5678 9123 0000"
            />

            <div className="expire-date">
               <p>Exp. date (MM/YY) CVC</p>

               <div className="inputs">
                  <Input
                     id={formData.monthId}
                     type="number"
                     error={formData.monthErr}
                     inputName="month"
                     inputData={(e) => formData.setMonth(e.target.value)}
                     placeHolder="MM"
                  />

                  <Input
                     id={formData.yearId}
                     type="number"
                     error={formData.yearErr}
                     inputName="year"
                     inputData={(e) => formData.setYear(e.target.value)}
                     placeHolder="YY"
                  />
                  <Input
                     id={formData.cvcId}
                     type="number"
                     error={formData.cvcErr}
                     inputName="cvc"
                     inputData={(e) => formData.setCvc(e.target.value)}
                     placeHolder="e.g. 123"
                  />
               </div>
            </div>

            <button className="confirm-btn btn" type="submit">
               Confirm
            </button>
         </form>
      </div>
   );
};

export default Form;
