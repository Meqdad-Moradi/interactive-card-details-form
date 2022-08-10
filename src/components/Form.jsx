import React, { useContext } from "react";
import { useFormik } from "formik";
import { userContext } from "../contexts/AppContext";
import Input from "./Input";

const Form = () => {
   const { setCardData, setIsFormFilled } = useContext(userContext);

   // validation function ( it must return an object like 'errors' in this example)
   const validate = (values) => {
      const errors = {};
      if (!values.username) {
         errors.username = "Can't be blank";
      } else if (
         /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(values.username)
      ) {
         errors.username = "Wrong format, letters only";
      }

      if (!values.cardnumber) {
         errors.cardnumber = `Can't be blank`;
      } else if (!/^[0-9\s]*$/.test(values.cardnumber)) {
         errors.cardnumber = `Wrong format, numbers only`;
      } else if (!/^.{19,19}$/.test(values.cardnumber)) {
         errors.cardnumber = `Card number must be 16 digits`;
      }

      if (!values.month) {
         errors.month = `Can't be blank`;
      } else if (!/^[0-9]*$/.test(values.month)) {
         errors.month = `Numbers only`;
      } else if (!/^.{1,2}$/.test(values.month)) {
         errors.month = `Card number must be 2 digits`;
      }

      if (!values.year) {
         errors.year = `Can't be blank`;
      } else if (!/^[0-9]*$/.test(values.year)) {
         errors.year = `Numbers only`;
      } else if (!/^.{1,2}$/.test(values.year)) {
         errors.year = `Card number must be 2 digits`;
      }

      if (!values.cvc) {
         errors.cvc = `Can't be blank`;
      } else if (!/^[0-9]*$/.test(values.cvc)) {
         errors.cvc = `Numbers only`;
      } else if (!/^.{1,3}$/.test(values.cvc)) {
         errors.cvc = `Card number must be 3 digits`;
      }

      return errors;
   };

   const formik = useFormik({
      initialValues: {
         username: "",
         cardnumber: "",
         month: "",
         year: "",
         cvc: "",
      },
      // validationSchema: yupValidation,
      validate,
      onSubmit: (values) => {
         setCardData(values);
         setIsFormFilled(true);
      },
   });

   return (
      <div className="main-form">
         <form onSubmit={formik.handleSubmit}>
            <Input
               id="username"
               type="text"
               name="username"
               onchange={formik.handleChange}
               onblur={formik.handleBlur}
               value={formik.values.username}
               label="Cardholder name"
               placeholder="e.g. Jane Appleseed"
               err={
                  formik.touched.username && formik.errors.username
                     ? formik.errors.username
                     : null
               }
            />

            <Input
               label="Card number"
               name="cardnumber"
               id="cardnumber"
               placeholder="e.g. 1234 5678 9123 0000"
               type="text"
               onchange={formik.handleChange}
               onblur={formik.handleBlur}
               value={formik.values.cardnumber
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim()}
               err={
                  formik.touched.cardnumber && formik.errors.cardnumber
                     ? formik.errors.cardnumber
                     : null
               }
               length={19}
            />

            <div className="expire-date">
               <p>Exp. date (MM/YY)</p>

               <div className="inputs">
                  <Input
                     label=""
                     name="month"
                     id="month"
                     placeholder="MM"
                     type="text"
                     onchange={formik.handleChange}
                     onblur={formik.handleBlur}
                     value={formik.values.month}
                     err={
                        formik.touched.month && formik.errors.month
                           ? formik.errors.month
                           : null
                     }
                     length={2}
                  />
                  <Input
                     label=""
                     name="year"
                     id="year"
                     placeholder="YY"
                     type="text"
                     onchange={formik.handleChange}
                     onblur={formik.handleBlur}
                     value={formik.values.year}
                     err={
                        formik.touched.year && formik.errors.year
                           ? formik.errors.year
                           : null
                     }
                     length={2}
                  />
                  <Input
                     label="cvc"
                     name="cvc"
                     id="cvc"
                     placeholder="e.g. 123"
                     type="text"
                     onchange={formik.handleChange}
                     onblur={formik.handleBlur}
                     value={formik.values.cvc}
                     err={
                        formik.touched.cvc && formik.errors.cvc
                           ? formik.errors.cvc
                           : null
                     }
                     length={3}
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
