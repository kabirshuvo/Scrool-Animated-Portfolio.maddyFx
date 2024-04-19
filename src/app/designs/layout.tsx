import React, { ReactNode } from "react";

interface DesignsLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const DesignsLayout: React.FC<DesignsLayoutProps> = ({ children, modal }) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default DesignsLayout;
