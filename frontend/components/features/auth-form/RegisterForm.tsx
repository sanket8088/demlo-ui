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
// import { signUp } from "@/utility/auth";
import { handleGoogleAuthentication } from "@/utility/auth";
import AccountConfirmationForm from "./AccountConfirmationForm";
import moment from "moment";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const {
    signUp,
    isAuthenticated,
    isAuthenticating,
    unverifiedAccount,
    confirmAccount,
    google_signIn,
    user,
  } = useAuth();
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
  // const createUser = async (data: ITypesUser) => {
  //   const { data: response } = await axios.post(
  //     "http://66.94.102.196:9001/v1/api/user/signup",
  //     data
  //   );
  //   return response.data;
  // };

  // const { isLoading, isError, error, mutate, data } = useMutation(createUser, {
  //   onSuccess(data, variables, context) {
  //     router.push({
  //       pathname: "/login",
  //     });
  //   },
  // });
  const [successSignUp, setSuccessSignUp] = useState<boolean>(false);
  const [signUpEmail, setSignUpEmail] = useState<string>("");

  const handleBackToSignUp = (data: boolean) => {
    setSuccessSignUp(false);
  };
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (values: any, actions: any) => {
    try {
      setLoading(true);
      await signUp({
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        birthdate: values.dob,
      });
      setLoading(false);
      setSuccessSignUp(true);
      toast.success("Successfully Registered");
    } catch (err: any) {
      toast.error(err.message);
      setLoading(false);
      setSuccessSignUp(false);
    }

    // signUp(
    //   values?.username,
    //   values?.password,
    //   values?.firstName,
    //   values?.lastName,
    //   values?.email
    // ).then((data) => {
    //   setSuccessSignUp(true);
    //   setSignUpEmail(values?.email);
    // });
    // mutate({
    //   email: values?.email,
    //   dob: values?.dob,
    //   password: values?.password,
    //   first_name: values?.firstName,
    //   last_name: values?.lastName,
    //   username: values?.username,
    // });
  };

  // useEffect(() => {
  //   console.log("loading", loading);
  //   if (loading) {
  //     console.log("loading", loading);
  //     console.log(
  //       "in register",
  //       isAuthenticated,
  //       isAuthenticating,
  //       unverifiedAccount,
  //       confirmAccount
  //     );
  //   }

  // router.push({
  //   pathname: '/login'})
  // }, [loading]);

  const registerValidation = Yup.object().shape({
    email: Yup.string().email().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
    dob: Yup.string()
      .required()
      .test("DOB", "Age must be between 12 to 20", (value) => {
        const twelveCheck = moment().diff(moment(value), "years") >= 12;
        const twentyCheck = moment().diff(moment(value), "years") <= 20;

        return twelveCheck && twentyCheck;
      }),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    termsAndConditions: Yup.bool().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });
  // useEffect(() => {
  //   console.log("isAuthenticating", isAuthenticating);
  // }, []);
  // console.log("isAuthenticating out>>", isAuthenticating, user);

  return (
    <>
      {!successSignUp ? (
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
                        onClick={google_signIn}
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
                        disabled={loading}
                        size="large"
                        customPaddingBlock="0.813rem"
                      />
                    </GridItem>
                    <GridItem xs={12} paddingBottom="1.25rem">
                      <SwitchTab>
                        Already have an account?{" "}
                        <Link href="/login">Log in</Link>
                      </SwitchTab>
                    </GridItem>
                  </GridContainer>
                </form>
              );
            }}
          </Formik>
        </ModalComponent>
      ) : (
        <AccountConfirmationForm
          handleBackToSignUp={handleBackToSignUp}
          email={signUpEmail}
        />
      )}
    </>
  );
};

export default RegisterForm;
