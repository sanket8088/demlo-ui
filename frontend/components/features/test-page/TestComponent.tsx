import React from "react";

import { ClassNames } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

import { Paragraph, Main, Flex } from "./TestComponent.style";

interface ITestTypes {
  title: string;
  sliderWidth?: number;
}
export const TestComponent = ({ title, sliderWidth }: ITestTypes) => {
  return (
    <Main>
      <Paragraph>{title}</Paragraph>
      <Slider defaultValue={sliderWidth} />

      <Flex>
        <Paragraph>hello workld</Paragraph>
        <Paragraph>hello workld</Paragraph>
      </Flex>
    </Main>
  );
};
