import React, { useRef } from "react";

import { RegisterForm } from "@/components/features/auth-form";

const register = () => {
  const formikRef = useRef();

  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);
  };
  return (
    <main>
      <div className="grid">
        <div className="grid-span-medium">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default register;
