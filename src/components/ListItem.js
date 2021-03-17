import React from "react";
import "../assets/css/ListItem.css";

const ListItem = ({ title, description, img: { src, alt } }) => {
  return (
    <div className="ListItem">
      <img src={src} alt={alt} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ListItem;
