import { LoginForm } from "@/components/features/auth-form";
import React from "react";

const login = () => {
  return (
    <main>
      <div className="grid">
        <div className="grid-span-medium">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default login;
