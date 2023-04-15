import AuthComponent from "@/components/features/auth-modal";
import React from "react";

const login = () => {
  return (
    <div style={{background: "radial-gradient(20.04% 35.63% at 20.04% 38.89%, rgba(0, 103, 255, 0.2) 0%, rgba(0, 103, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(30.97% 15.76% at 93.79% 86.18%, rgba(0, 231, 190, 0.1) 0%, rgba(0, 231, 190, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #1C232D;",
      width: "100vw",
      height: "100vh",
      display:"flex",
      justifyContent:"center"}}>
      <>
      <AuthComponent title={"Create Account"} subTitle={"Get started with an account on Demlo"} />
    </>
    </div>
    
  );
};

export default login;
