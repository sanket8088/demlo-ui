import ModalComponent from "@/components/core-components/modal/ModalComponent";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FastInput from "@/components/core-components/input/FastInput";
import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import { SwitchTab, SubtitleDiv, OperationalDiv } from "./AuthForm.style";
import { Amplify, Auth } from "aws-amplify";

interface props {
  handleBackToSignUp: (data: boolean) => void;
  email: string;
}

const AccountConfirmationForm = ({ handleBackToSignUp, email }: props) => {
  const redirectToSignUp = () => {
    handleBackToSignUp(false);
  };

  const resendConfirmation = () => {
    // console.log("Resend signup");
    Auth.resendSignUp(email)
  };

  const subtitle = `An email with instructions on how to reset your password has been sent to ${email}`

  return (
    <>
      <ModalComponent
        title="Let's confirm your email"
        subTitle= {subtitle}
      >
        <SubtitleDiv>
          <GridItem xs={12} paddingBottom="30px"></GridItem>
          <GridItem xs={12} paddingBottom="1.25rem">
            <SwitchTab>
              Please verify your email id by clicking on the verification link
              sent to {email}
              <Link href="/register">Edit</Link>
            </SwitchTab>
          </GridItem>
        </SubtitleDiv>

        <GridContainer spacing={2}>
          <GridItem xs={12}>
            <ButtonComponent
              label="Back to Sign Up"
              variant="contained"
              fullWidth
              onClick={redirectToSignUp}
              disabled={false}
              size="large"
            />
          </GridItem>
          <GridItem xs={12} paddingBottom="1.25rem">
            <SwitchTab>
              Didn't received verification link?{" "}
              <Link href="#" onClick={resendConfirmation}>
                Resend link
              </Link>
            </SwitchTab>
          </GridItem>
        </GridContainer>
      </ModalComponent>
    </>
  );
};

export default AccountConfirmationForm;
