import React, { useRef } from "react";
import { Formik, Form, FastField } from "formik";
import FastInput from "@/components/core-components/input/FastInput";
import * as Yup from "yup";
import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
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
