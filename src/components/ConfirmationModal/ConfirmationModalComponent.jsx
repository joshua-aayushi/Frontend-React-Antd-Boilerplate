import { Modal } from "antd";
import React from "react";

const ConfirmationModalComponent = ({
  title,
  content,
  okBtnText,
  openState,
  openStateChangeFunction,
  onOkFunction,
}) => {
  return (
    <Modal
      title={title}
      okText={okBtnText}
      open={openState}
      onOk={onOkFunction}
      onCancel={() => openStateChangeFunction(false)}
      okButtonProps={{ type: "primary", danger: true }}
      style={{ marginTop: "10vh" }}
    >
      {content}
    </Modal>
  );
};

export default ConfirmationModalComponent;
