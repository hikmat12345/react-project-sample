//libs
import React from "react";

//src
import { FAELoading } from "../TPLoading/TPLoading";

//scss
import "./TPButton.scss";

export const TPButton = ({
  primary,
  children,
  className = "",
  loading,
  loaderProps,
  ...rest
}) => {
  return (
    <>
      {loading ? (
        <FAELoading {...loaderProps} />
      ) : (
        <button
          className={`fae-button ${
            primary && "primary-fae-button"
          } ${className}`}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
};
