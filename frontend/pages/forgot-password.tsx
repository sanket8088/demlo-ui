import { ForgotPasswordForm } from "@/components/features/auth-form";
import React from "react";

const login = () => {
  return (
    <main className="auth-form_alignment">
      <div className="grid">
        <div className="grid-span-narrow">
          <ForgotPasswordForm />
        </div>
      </div>
    </main>
  );
};

export default login;
