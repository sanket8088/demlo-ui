import ModalComponent from "@/components/core-components/modal/ModalComponent";
import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, FastField } from "formik";
import Link from "next/link";
import FastInput from "@/components/core-components/input/FastInput";
import * as Yup from "yup";
import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import { useQuery, useMutation } from "react-query";
import { fetchQueries, postQueries } from "@/utility/queryController";
import axios from "axios";
import { useRouter } from "next/router";
import { setAuthToStorage } from "@/utility/auth";
import SocialLink from "@/components/core-components/links/SocialLink";
import GoogleIcon from "@/assets/icons/jsx/GoogleIcon";
import MicrosoftIcon from "@/assets/icons/jsx/MicrosoftIcon";
import { HR, SwitchTab, ForgotLink } from "./AuthForm.style";
import { signIn } from "@/utility/auth";
import { handleGoogleAuthentication } from "@/utility/auth";
import { setAuthState } from "@/Store/slice";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const { signIn, isAuthenticated, isAuthenticating, google_signIn } =
    useAuth();
  const router = useRouter();
  const formikRef = useRef();
  const dispatch = useDispatch();

  const [dataVal, setDataVal] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successSignIn, setSuccessSignIn] = useState<boolean>(false);
  interface ITypesFetchUser {
    password: string;

    username: string;
  }
  const fetchUser = async (data: ITypesFetchUser) => {
    const { data: response } = await axios.post(
      "http://66.94.102.196:9001/api/token/",
      data
    );

    return response;
  };
  const { isLoading, isError, error, mutate, data } = useMutation(fetchUser, {
    onSuccess: (data) => {
      setAuthToStorage(data?.access, data?.refresh);
      router.push({
        pathname: "/profile",
      });
    },
  });
  const handleSubmit = async (values: any, actions: any) => {
    try {
      setLoading(true);
      await signIn({ username: values.username, password: values.password });
      setLoading(false);
      setSuccessSignIn(true);
    } catch (err: any) {
      toast.error(err.message);
      setLoading(false);
      setSuccessSignIn(false);
    }

    // signIn(values?.username, values?.password).then((data) =>{
    //   if (data){
    //     router.push({
    //       pathname: "/profile",
    //     });

    //   }
    // })

    // mutate({
    //   password: values?.password,

    //   username: values?.username,
    // });
  };

  useEffect(() => {
    console.log("login", dataVal);
  }, [data]);
  const loginValidation = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Successfully Logged in");
      dispatch(setAuthState(true));
      router.replace("/profile");
      console.log("signed in");
    }
  }, [isAuthenticated]);
  // if (isAuthenticating || isAuthenticated) {
  //   return <h1>Loading</h1>;
  // }
  return (
    <ModalComponent
      title="Welcome back !"
      subTitle="Please Sign in to continue"
    >
      <Formik
        validateOnMount
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginValidation}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const { username, password } = props.values;
          return (
            <form onSubmit={props.handleSubmit}>
              <GridContainer spacing={2}>
                <GridItem xs={6} paddingBottom="1.255rem">
                  <SocialLink
                    label="Sign in with google"
                    icon={<GoogleIcon />}
                    onClick={google_signIn}
                  />
                </GridItem>
                <GridItem xs={6} paddingBottom="1.25rem">
                  <SocialLink
                    label="Sign in with Microsoft"
                    icon={<MicrosoftIcon />}
                  />
                </GridItem>
                <GridItem xs={12} paddingBottom="1.25rem">
                  <HR>or sign in with username</HR>
                </GridItem>
                <GridItem xs={12} paddingBottom="30px">
                  <FastInput name="username" label="Username" required />
                </GridItem>
                <GridItem xs={12} paddingBottom="0px">
                  <FastInput
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </GridItem>
                <GridItem xs={12} paddingBottom="0px">
                  <ForgotLink>
                    <Link href="/forgot-password">Forgot password</Link>
                  </ForgotLink>
                </GridItem>

                <GridItem xs={12} paddingBottom="30px">
                  <ButtonComponent
                    label="Sign in"
                    variant="contained"
                    fullWidth
                    onClick={props.handleSubmit}
                    disabled={loading}
                    size="large"
                  />
                </GridItem>
                <GridItem xs={12} paddingBottom="1.25rem">
                  <SwitchTab>
                    Don't have an account? <Link href="/register">Sign up</Link>
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

export default LoginForm;
