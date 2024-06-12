import React from "react";
import { PlusOutlined } from "@ant-design/icons";

export default function FieldButton(props) {
  const { title } = props;
  return (
    <>
      <div
        className="border-dashed border-2 border-primary rounded-md p-4 bg-primary-50 flex justify-center items-center gap-2 cursor-pointer"
        {...props}
      >
        <PlusOutlined className="text-primary" />
        <div className="text-primary">{title}</div>
      </div>
    </>
  );
}
