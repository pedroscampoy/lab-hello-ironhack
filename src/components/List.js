import React from "react";
import ListItem from "./ListItem";
import "../assets/css/List.css";

const items = [
  {
    title: "Declarative",
    description: "React makes it painless to create interactive UIs.",
    img: { src: "/images/icon1.png", alt: "Declarative" },
  },
  {
    title: "Components",
    description: "Build encapsulated components that manage their state.",
    img: { src: "/images/icon2.png", alt: "Components" },
  },
  {
    title: "Single-Way",
    description: "A set of immutable values are passed to the components.",
    img: { src: "/images/icon3.png", alt: "Single-Way" },
  },
  {
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers.",
    img: { src: "/images/icon4.png", alt: "JSX" },
  },
];

const List = () => {
  return (
    <div className="List">
      {items.map((item) => {
        return <ListItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default List;
