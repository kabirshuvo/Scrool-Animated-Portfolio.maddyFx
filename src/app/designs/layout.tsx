import React from "react";

interface DesignsLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
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
