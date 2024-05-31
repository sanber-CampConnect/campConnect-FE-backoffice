import React from "react";

import { Button } from "antd";

function BButton(props) {
  const { shape, customclass } = props;
  return (
    <>
      <Button
        className={
          shape
            ? "" + customclass
            : "rounded-md h-full flex justify-center items-center px-3" +
              ` ${customclass}`
        }
        {...props}
      />
    </>
  );
}

export default BButton;
