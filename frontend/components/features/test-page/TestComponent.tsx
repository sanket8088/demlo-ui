import React from "react";

import { ClassNames } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import * as styles from "./TestComponent.module.scss";
import { Paragraph, Main, Flex } from "./TestComponent.style";
import Input from "@/components/core-components/input/Input";

interface ITestTypes {
  title: string;
  sliderWidth?: number;
}
export const TestComponent = ({ title, sliderWidth }: ITestTypes) => {
  return (
    <Main>
      <Paragraph>{title}</Paragraph>
      <Slider defaultValue={sliderWidth} />
      <Input label="text" />
      <Flex>
        <Paragraph>hello workld</Paragraph>
        <Paragraph>hello workld</Paragraph>
      </Flex>
    </Main>
  );
};
