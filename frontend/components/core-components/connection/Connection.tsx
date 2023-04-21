import React from "react";

import { Title, Modal } from "./Connection.style";

interface IModalTypes {
  title: string;
  children?: React.ReactNode;
}

const ConnectionContainer = ({ title, children }: IModalTypes) => {
  return (
      <Modal>
        <Title>{title}</Title> 
        {children ? children : null}
      </Modal>
  );
};

export default ConnectionContainer;
