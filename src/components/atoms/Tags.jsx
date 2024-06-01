import React from "react";

export default function Tags(props) {
  const { color, title } = props;
  return (
    <div className="flex">
      <div
        className={
          color
            ? `custom-tag custom-tag-${color}`
            : "custom-tag custom-tag-green"
        }
      >
        {title ? title : "-"}
      </div>
    </div>
  );
}
