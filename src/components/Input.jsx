import React from "react";

const Input = ({
   id,
   label,
   type,
   error,
   inputName,
   inputData,
   placeHolder,
}) => {
   return (
      <div className="form-control">
         <label htmlFor={id}>{label}</label>
         <input
            className={error && "error"}
            type={type}
            name={inputName}
            id={id}
            onChange={inputData}
            placeholder={placeHolder}
         />
         <small>{error}</small>
      </div>
   );
};

export default Input;
