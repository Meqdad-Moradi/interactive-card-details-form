import React, { useContext } from "react";
import { userContext } from "./../contexts/AppContext";
import Complete from "./Complete";
import Form from "./Form";

const Main = () => {
   const value = useContext(userContext);

   return <>{value.formSubmited ? <Complete /> : <Form />}</>;
};

export default Main;
