import React from "react";

const Image = ({ file, name, alt }) => {
  return (
    <>
      <img className={name} src={file} alt={alt} />
    </>
  );
};

Image.defaultProps = {
  file: "../assets/group10.png",
  name: "headerImg",
  alt: "image",
};

export default Image;
