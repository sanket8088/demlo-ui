import React from "react";
import { FastField } from "formik";
import Input from "./Input";
interface ITypesFastField {
  name: string;
  inputProps?: any;
  label?: string;
  required?: boolean;
}

const FastInput = ({
  name,
  inputProps,
  label,
  required,
  ...props
}: ITypesFastField) => {
  return (
    <FastField name={name}>
      {({ field, meta }: any) => {
        const { error, touched } = meta;
        console.log("error=", error, "touched", touched);
        return (
          <Input
            inputProps={{
              name: field.name,
              onBlur: field.onBlur,
              ...inputProps,
            }}
            value={field.value ?? ""}
            onChange={field.onChange}
            error={touched && !!error}
            helperText={touched && error ? error : null}
            label={label}
            required={required}
            {...props}
          />
        );
      }}
    </FastField>
  );
};

export default FastInput;
