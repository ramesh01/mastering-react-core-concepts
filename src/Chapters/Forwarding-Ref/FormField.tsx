import { FC, forwardRef, useState } from "react";
import MyInput from "./MyInput";

type InputProps = {
  label: string;
  isRequired: boolean;
  ref: any
}
const FormField: FC<InputProps> = forwardRef(({ label, isRequired }, ref) => {
  const [value, setValue] = useState('');
  return (
    <>
      <MyInput
        inputref={ref}
        label={label}
        value={value}
        changehandler={(e: any) => setValue(e.target.value)}
      />
      {(isRequired && value === '') &&
        <i>Required</i>
      }
    </>
  )
})
export default FormField;