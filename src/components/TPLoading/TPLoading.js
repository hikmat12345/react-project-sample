//libs
import React from "react";
import {   TPContainer } from "../TPContainer/TPContainer";

//src

//scss
import "./TPLoading.scss";

export const TPLoading = ({
  small,
  loaderImage,
  justify,
  align,
  className = "",
  height = "",
  type = "",
  ...rest
}) => {
  return (
    <TPContainer justify={justify} align={align}>
      <div
        className={`fae--loader-main-container ${className}`}
        {...rest}
        style={{ height: height }}
      >
        {small ? (
          type === "video" ? (
            <video
              muted
              autoPlay
              loop
              playsInline
              type="video/mp4"
              width="100%"
              height="100px"
              src={loaderImage}
              className="fae--loader-image-small"
              alt="loader"
            />
          ) : (
            <img
              className="fae--loader-image-small"
              src={loaderImage}
              alt="loader"
            />
          )
        ) : type === "video" ? (
          <video
            muted
            autoPlay
            loop
            playsInline
            type="video/mp4"
            width="100%"
            height="100px"
            src={loaderImage}
            alt="loader"
          />
        ) : (
          <img src={loaderImage} alt="loader" width="100%" height="100px" />
        )}
      </div>
    </TPContainer>
  );
};
