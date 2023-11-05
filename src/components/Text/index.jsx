import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsLight28: "font-light font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
