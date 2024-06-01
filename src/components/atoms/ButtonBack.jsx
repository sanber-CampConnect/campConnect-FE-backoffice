import React from "react";
import BButton from "./BButton";

export default function ButtonBack(props) {
  return (
    <BButton
      customclass="p-2 h-full mr-3"
      type={props.type ?? "primary"}
      icon={<i className="bi bi-arrow-left"></i>}
      {...props}
    />
  );
}
