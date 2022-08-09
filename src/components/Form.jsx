import React, { useContext } from "react";
import { userContext } from "../contexts/AppContext";
import Input from "./Input";

const Form = () => {
   // // set state to inputs
   // const [cardHolder, setCardHolder] = useState(null);
   // const [cardNum, setCardNum] = useState(null);
   // const [month, setMonth] = useState(null);
   // const [year, setYear] = useState(null);
   // const [cvc, setCvc] = useState(null);

   // //  set id to inputs
   // const cardHolderId = useId();
   // const cardNumId = useId();
   // const monthId = useId();
   // const yearId = useId();
   // const cvcId = useId();

   // //  set error message if there is an error
   // const [cardHolderErr, setCardHolderErr] = useState(null);
   // const [cardNumErr, setCardNumErr] = useState(null);
   // const [monthErr, setMonthErr] = useState(null);
   // const [yearErr, setYearErr] = useState(null);
   // const [cvcErr, setCvcErr] = useState(null);

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
         formData.setFormSubmited(true);

         formData.setCardFrontData({
            cardHolder: formData.cardHolder,
            cardNum: formData.cardNum,
            month: formData.month,
            year: formData.year,
         });

         formData.setCardBackData({ cvc: formData.cvc });
      }
   };

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
               inputData={(e) => formData.setCardNum(e.target.value)}
               placeHolder="e.g. 1234 5678 9123 0000"
            />

            <div className="expire-date">
               <p>Exp. date (MM/YY) CVC</p>

               <div className="inputs">
                  <Input
                     id={formData.monthId}
                     type="text"
                     error={formData.monthErr}
                     inputName="month"
                     inputData={(e) => formData.setMonth(e.target.value)}
                     placeHolder="MM"
                  />

                  <Input
                     id={formData.yearId}
                     type="text"
                     error={formData.yearErr}
                     inputName="year"
                     inputData={(e) => formData.setYear(e.target.value)}
                     placeHolder="YY"
                  />
                  <Input
                     id={formData.cvcId}
                     type="text"
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
