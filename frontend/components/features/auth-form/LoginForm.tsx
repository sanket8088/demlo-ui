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

const LoginForm = () => {
  const router = useRouter();
  const formikRef = useRef();
  interface ITypesFetchUser {
    password: string;

    username: string;
  }
  const fetchUser = async (data: ITypesFetchUser) => {
    const { data: response } = await axios.post(
      "http://66.94.102.196:9001/api/token/",
      data
    );
    return response.data;
  };
  const { isLoading, isError, error, mutate, data } = useMutation(fetchUser, {
    onSuccess(data, variables, context) {
      console.log("sucess", data);
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

  const loginValidation = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
  return (
    <div style={{ marginTop: "120px" }}>
      <ModalComponent
        title="Create Account"
        subTitle="Get started with an account on Demlo"
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

export default LoginForm;
