import React, { useRef, useState } from "react";

import { RegisterForm } from "@/components/features/auth-form";
import OnBoardingTemplate from "@/layouts/OnBoardingTemplate";

const register = () => {
  return (
    <OnBoardingTemplate>
      <RegisterForm />
    </OnBoardingTemplate>
  );
};

export default register;
