import { ForgotPasswordForm } from "@/components/features/auth-form";
import React from "react";
import OnBoardingTemplate from "@/layouts/OnBoardingTemplate";

const login = () => {
  return (
    <OnBoardingTemplate span="narrow">
      <ForgotPasswordForm />
    </OnBoardingTemplate>
  );
};

export default login;
