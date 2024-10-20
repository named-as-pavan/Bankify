import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
// import { Interface } from "readline";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { type } from 'os';



const fromSchema = authFormSchema('sign-up')


interface CustomInput {
    control : Control<z.infer<typeof fromSchema>>,
    name: FieldPath<z.infer<typeof fromSchema>>,
    label:string,
    placeholder : string
}

const CustomInput = ({ control, name, label, placeholder } : CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                type={name === "password" ? "password" : "text"}
              />
            </FormControl>
            <FormMessage className="foem-message mt-2 text-red-600" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
