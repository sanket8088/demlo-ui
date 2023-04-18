import React, { useRef } from "react";

import { RegisterForm } from "@/components/features/auth-form";
import OnBoardingTemplate from "@/layouts/OnBoardingTemplate";

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
