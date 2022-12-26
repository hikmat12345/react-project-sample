//libs
import React from "react";

//src
import { TPText } from "../TPText/TPText";

//scss
import "./TPPageNotFound.scss";

export const TPPageNotFound = ({
  src,
  message,
  onClick,
  linkText,
  width = "50%",
  ...rest
}) => {
  return (
    <>
      <div className="fae--page-not-found-main-container" {...rest}>
        <img width={width} height="auto" src={src} alt={src} />
        <TPText heading>{message}</TPText>
        <TPText style={{ cursor: "pointer" }} onClick={onClick}>
          {linkText}
        </TPText>
      </div>
    </>
  );
};
