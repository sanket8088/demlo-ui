import { LoginForm } from "@/components/features/auth-form";
import React from "react";
import OnBoardingTemplate from "@/layouts/OnBoardingTemplate";

const login = () => {
  return (
    <OnBoardingTemplate theme="light">
      <LoginForm />
    </OnBoardingTemplate>
  );
};

export default login;
