import React from "react";
import Dashboard from "@/components/features/dashboard";
import DashboardTemplate from "@/layouts/DashboardTemplate";

const dashboard = () => {
  return (
    <DashboardTemplate>
      <Dashboard />
    </DashboardTemplate>
  );
};

export default dashboard;
