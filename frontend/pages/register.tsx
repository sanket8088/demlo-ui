import React, { useRef } from "react";
import { Formik, Form, FastField } from "formik";
import FastInput from "@/components/core-components/input/FastInput";
import * as Yup from "yup";
import Input from "@/components/core-components/input/Input";
const register = () => {
  const formikRef = useRef();

  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);
  };
  return (
    <div style={{ background: "black" }}>
      <p>Formik test</p>
      {/* <FastInput name={"dr"} /> */}
      <Formik
        validateOnMount
        initialValues={{ email: "", name: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
        })}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const { email, name } = props.values;
          return (
            <form onSubmit={props.handleSubmit}>
              <FastInput name="email" label="Email" required />
              <FastInput name="name" />
              <button onClick={props.submitForm} type="button">
                submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default register;
