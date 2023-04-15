import AuthComponent from "@/components/features/auth-modal";
import React from "react";

const login = () => {
  return (
    <div style={{background: "black",
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
