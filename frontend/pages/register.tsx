import React, { useRef, useState } from "react";

import { RegisterForm } from "@/components/features/auth-form";
import OnBoardingTemplate from "@/layouts/OnBoardingTemplate";
import AccountConfirmationForm from "@/components/features/auth-form/AccountConfirmationForm";

const register = () => {
  const formikRef = useRef();

  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);
  };
  return (
    <OnBoardingTemplate>
      <RegisterForm />
    </OnBoardingTemplate>
  );
};

export default register;
