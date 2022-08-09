import React, { useContext } from "react";
import { userContext } from "./../contexts/AppContext";
import Complete from "./Complete";
import Form from "./Form";

const Main = () => {
   // const [formSubmited, setFormSubmited] = useState(false);
   // const [formData, setFormData] = useState(null);

   // setCardBackData(formData);
   // setCardFrontData(formData);

   const value = useContext(userContext);

   return <>{value.formSubmited ? <Complete /> : <Form />}</>;
};

export default Main;
