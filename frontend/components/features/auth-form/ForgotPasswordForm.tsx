import ModalComponent from "@/components/core-components/modal/ModalComponent";
import React, { useEffect, useRef, useState } from "react";
import { Formik, FastField } from "formik";
import Link from "next/link";
import FastInput from "@/components/core-components/input/FastInput";
import * as Yup from "yup";
import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { Form, SwitchTab, SubtitleDiv } from "./AuthForm.style";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [resetLinkSent, setResetLinkSent] = useState(false);
  interface ITypesFetchEmail {
    email: string;
  }
  const sendResetLink = async (data: ITypesFetchEmail) => {
    const { data: response } = await axios.get(
      "http://66.94.102.196:9001/health-check"
    );
    return response;
  };
  const { isLoading, isError, error, mutate, data } = useMutation(
    sendResetLink,
    {
      onSuccess: (data) => {
        setResetLinkSent(true);
      },
    }
  );
  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);

    mutate({
      email: values?.email,
    });
  };

  useEffect(() => {}, [data]);
  const loginValidation = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  return (
    <>
      {resetLinkSent ? (
        <ModalComponent
          title="Email Sent"
          subTitle="An email with instructions on how to reset your password has been sent to abc@gmail.com"
        >
          <SubtitleDiv>
            <GridItem xs={12} paddingBottom="30px"></GridItem>
            <GridItem xs={12} paddingBottom="1.25rem">
              <SwitchTab>
                Didn't receive Email ?{" "}
                <Link href="/forgot-password">Resend Email</Link>
              </SwitchTab>
            </GridItem>
          </SubtitleDiv>
        </ModalComponent>
      ) : (
        <ModalComponent
          title="Forgot Password ?"
          subTitle="Don't worry, we got you covered, Enter the email ID associated with this account to send you the password reset link"
        >
          <Formik
            validateOnMount
            initialValues={{
              email: "",
            }}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
          >
            {(props) => {
              const { email } = props.values;
              return (
                <Form onSubmit={props.handleSubmit}>
                  <GridContainer spacing={2}>
                    <GridItem xs={12} paddingBottom="30px">
                      <FastInput name="email" label="Email ID" required />
                    </GridItem>

                    <GridItem xs={12} paddingBottom="30px">
                      <ButtonComponent
                        label="Send Reset Link"
                        variant="contained"
                        fullWidth
                        onClick={props.handleSubmit}
                        disabled={isLoading}
                        size="large"
                      />
                    </GridItem>
                    <GridItem xs={12} paddingBottom="1.25rem">
                      <SwitchTab>
                        Go back to <Link href="/login">Sign in</Link>
                      </SwitchTab>
                    </GridItem>
                  </GridContainer>
                </Form>
              );
            }}
          </Formik>
        </ModalComponent>
      )}
    </>
  );
};

export default ForgotPasswordForm;
