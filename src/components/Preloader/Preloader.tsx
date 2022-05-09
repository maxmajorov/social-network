import React from "react";
import preloader from "../../assets/img/Spinner.gif";

export const Preloader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={preloader} alt={"loading"} />
    </div>
  );
};
