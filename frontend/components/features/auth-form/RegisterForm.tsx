import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModalComponent from "@/components/core-components/modal/ModalComponent";
import { Formik, Form, FastField } from "formik";
import FastInput from "@/components/core-components/input/FastInput";
import * as Yup from "yup";
import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import { useQuery, useMutation } from "react-query";
import { fetchQueries, postQueries } from "@/utility/queryController";
import axios from "axios";
import { useRouter } from "next/router";
import FastCheckbox from "@/components/core-components/checkbox/FastCheckbox";
import { PolicyWrap, HR, SwitchTab } from "./AuthForm.style";
import SocialLink from "@/components/core-components/links/SocialLink";
import GoogleIcon from "@/assets/icons/jsx/GoogleIcon";
import MicrosoftIcon from "@/assets/icons/jsx/MicrosoftIcon";
import { signUp } from "@/utility/auth";
import { handleGoogleAuthentication } from "@/utility/auth";
const RegisterForm = () => {
  const router = useRouter();
  const formikRef = useRef();

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: fetchQueries,
  // });

  interface ITypesUser {
    email: string;
    dob: string;
    contact_number?: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
  }
  const createUser = async (data: ITypesUser) => {
    const { data: response } = await axios.post(
      "http://66.94.102.196:9001/v1/api/user/signup",
      data
    );
    return response.data;
  };

  const { isLoading, isError, error, mutate, data } = useMutation(createUser, {
    // onSettled(data, error, variables, context) {
    //   console.log("settledData", data, error);
    // },
    // onError(error, variables, context) {
    //   // console.log(error?.response?.data?.message);
    //   toast.error("Something went wrong");
    // },
    onSuccess(data, variables, context) {
      console.log("sucess", data);
      router.push({
        pathname: "/login",
      });
    },
  });

  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);
    signUp(
      values?.username,
      values?.password,
      values?.firstName,
      values?.lastName,
      values?.email
    );
    // mutate({
    //   email: values?.email,
    //   dob: values?.dob,
    //   password: values?.password,
    //   first_name: values?.firstName,
    //   last_name: values?.lastName,
    //   username: values?.username,
    // });
  };
  useEffect(() => {
    if (error) {
      console.log("post", error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log(data);

      // router.push({
      //   pathname: '/login'})
    }
  }, [data]);

  console.log("loading", isLoading);

  const registerValidation = Yup.object().shape({
    email: Yup.string().email().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    dob: Yup.string().required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    termsAndConditions: Yup.bool().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });
  return (
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
          termsAndConditions: false,
        }}
        validationSchema={registerValidation}
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
                <GridItem xs={6} paddingBottom="1.255rem">
                  <SocialLink
                    label="Sign up with google"
                    icon={<GoogleIcon />}
                    onClick={handleGoogleAuthentication}
                  />
                </GridItem>
                <GridItem xs={6} paddingBottom="1.25rem">
                  <SocialLink
                    label="Sign up with Microsoft"
                    icon={<MicrosoftIcon />}
                  />
                </GridItem>
                <GridItem xs={12} paddingBottom="1.25rem">
                  <HR>or sign up with email</HR>
                </GridItem>
                <GridItem xs={6} paddingBottom="1.875rem">
                  <FastInput name="firstName" label="First Name" required />
                </GridItem>
                <GridItem xs={6} paddingBottom="1.875rem">
                  <FastInput name="lastName" label="Last Name " required />
                </GridItem>
                <GridItem xs={6} paddingBottom="1.875rem">
                  <FastInput name="email" label="Email" required />
                </GridItem>
                <GridItem xs={6} paddingBottom="1.875rem">
                  <FastInput
                    name="dob"
                    label="Date of Birth"
                    required
                    type="date"
                  />
                </GridItem>

                <GridItem xs={12} paddingBottom="1.875rem">
                  <FastInput name="username" label="Username" required />
                </GridItem>
                <GridItem xs={6}>
                  <FastInput
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </GridItem>
                <GridItem xs={6}>
                  <FastInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    required
                  />
                </GridItem>
                <GridItem xs={12} paddingBottom="15px">
                  <PolicyWrap>
                    <FastCheckbox name="termsAndConditions" />
                    <p>
                      I agree <span>Terms</span> and <span>Policy</span>
                    </p>
                  </PolicyWrap>
                </GridItem>
                <GridItem xs={12} paddingBottom="1rem">
                  <ButtonComponent
                    label="Create account"
                    variant="contained"
                    fullWidth
                    onClick={props.handleSubmit}
                    disabled={isLoading}
                    size="large"
                  />
                </GridItem>
                <GridItem xs={12} paddingBottom="1.25rem">
                  <SwitchTab>
                    Already have an account? <Link href="/login">Log in</Link>
                  </SwitchTab>
                </GridItem>
              </GridContainer>
            </form>
          );
        }}
      </Formik>
    </ModalComponent>
  );
};

export default RegisterForm;
