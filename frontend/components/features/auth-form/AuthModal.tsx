import React from "react";
import ModalComponent from "@/components/core-components/modal/ModalComponent";



interface ITestTypes {
  title: string;
  subTitle: string;
}
export const AuthComponent = ({ title, subTitle }: ITestTypes) => {
  return (
        <ModalComponent title={title} subTitle={subTitle} />
  );
};
