import React from "react";
import classes from "./Title.module.css";

type TitlePropsType = {
  title: string;
};

export const Title: React.FC<TitlePropsType> = ({ title }) => {
  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};
