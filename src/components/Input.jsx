import React from "react";

const Input = (props) => {
   const { label, name, id, placeholder, type, onchange, onblur, value, err , length } =
      props;

   return (
      <div className="form-control">
         <label>{label}</label>
         <input
            id={id}
            type={type}
            name={name}
            onChange={onchange}
            onBlur={onblur}
            value={value}
            placeholder={placeholder}
            maxLength={length}
         />
         <small>{err}</small>
      </div>
   );
};

export default Input;
