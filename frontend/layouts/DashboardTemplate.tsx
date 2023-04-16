import React from "react";

interface Props {
  children: React.ReactNode;
}
const DashboardTemplate = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default DashboardTemplate;
