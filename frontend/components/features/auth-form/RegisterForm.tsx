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
                <GridContainer spacing={2}>
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="name" />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="name" />
                  </GridItem>{" "}
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="name" />
                  </GridItem>{" "}
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="name" />
                  </GridItem>{" "}
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="name" />
                  </GridItem>{" "}
                  <GridItem xs={6}>
                    <FastInput name="email" label="Email" required />
                  </GridItem>
                  <GridItem xs={6}>
                    <FastInput name="name" />
                  </GridItem>
                  <GridItem xs={12}>
                    <ButtonComponent
                      label="submit"
                      variant="contained"
                      fullWidth
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
