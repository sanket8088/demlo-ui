import ModalComponent from "@/components/core-components/modal/ModalComponent";
import React, { useRef } from "react";
import { Formik, Form, FastField } from "formik";
import FastInput from "@/components/core-components/input/FastInput";
import * as Yup from "yup";
import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
const RegisterForm = () => {
  const formikRef = useRef();
  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);
  };
  return (
    <div style={{ marginTop: "45px" }}>
      <ModalComponent
        title="Create Account"
        subTitle="Get started with an account on Demlo"
      >
        <Formik
          validateOnMount
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
            dob: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
          })}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              email,
              firstName,
              lastName,
              username,
              password,
              confirmPassword,
              dob,
            } = props.values;
            return (
              <form onSubmit={props.handleSubmit}>
                <GridContainer spacing={2}>
                  <GridItem xs={6}>
                    <FastInput name="firstName" label="First Name" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="lastName" label="Last Name " required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="dob" label="Date" required type="date" />
                  </GridItem>

                  <GridItem xs={12}>
                    <FastInput name="username" label="Username" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="password" label="Password" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput
                      name="confirmPassword"
                      label="Confirm Password"
                      required
                    />
                  </GridItem>
                  <GridItem xs={12}>
                    <ButtonComponent
                      label="submit"
                      variant="contained"
                      fullWidth
                      onClick={props.handleSubmit}
                    />
                  </GridItem>
                </GridContainer>
              </form>
            );
          }}
        </Formik>
      </ModalComponent>
    </div>
  );
};

export default RegisterForm;
