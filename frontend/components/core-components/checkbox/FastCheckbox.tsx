import React from "react";
import { FastField } from "formik";
import { Checkbox } from "@mui/material";
interface ITypesFastCheckbox {
  name: string;
}
const FastCheckbox = ({ name }: ITypesFastCheckbox) => {
  return (
    <FastField name={name}>
      {({ form }: any) => {
        const handleChange = (value: boolean) => {
          form.setFieldTouched(name, true);
          form.setFieldValue(name, value);
        };
        return (
          <>
            <Checkbox
              color="default"
              onChange={(e, val) => handleChange(val)}
              sx={{
                borderColor: "#C6C0BF",
                color: "#0A66C2",
              }}
            />
          </>
        );
      }}
    </FastField>
  );
};

export default FastCheckbox;
