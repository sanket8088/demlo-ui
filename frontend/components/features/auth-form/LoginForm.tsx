import ModalComponent from "@/components/core-components/modal/ModalComponent";
import React, { useEffect, useRef, useState } from "react";
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
import { setAuthToStorage } from "@/utility/auth";
const LoginForm = () => {
  const router = useRouter();
  const formikRef = useRef();

  const [dataVal, setDataVal] = useState(null);
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
        pathname: "/dashboard",
      });
    },
  });
  const handleSubmit = (values: any, actions: any) => {
    console.log("onsubmit", values);

    mutate({
      password: values?.password,

      username: values?.username,
    });
  };
  useEffect(() => {
    console.log("login", dataVal);
  }, [data]);
  const loginValidation = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
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
                <GridItem xs={12}>
                  <FastInput name="username" label="Username" required />
                </GridItem>
                <GridItem xs={12}>
                  <FastInput
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </GridItem>

                <GridItem xs={12}>
                  <ButtonComponent
                    label="Sign in"
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
  );
};

export default LoginForm;