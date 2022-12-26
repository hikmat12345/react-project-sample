//libs
import React from "react";

//src

//scss
import "./TPText.scss";

export const TPText = ({
  heading,
  subHeading,
  children,
  primary,
  secondary,
  tertiary,
  bold = "",
  paragraph,
  className = "",
  important,
  light,
  ...rest
}) => {
  const textType = heading
    ? "heading"
    : subHeading
    ? "sub-heading"
    : paragraph
    ? "paragraph"
    : "";
  const textColor = primary
    ? "primary-text-color"
    : secondary
    ? "secondar-text-color"
    : tertiary
    ? "tertiary-text-color"
    : "";
  return (
    <>
      <p
        className={`fae--text ${className} ${textType} ${textColor} ${
          bold && "bold"
        } ${light && "light"}`}
        {...rest}
      >
        {children} {important && <span className="error">*</span>}
      </p>
    </>
  );
};
