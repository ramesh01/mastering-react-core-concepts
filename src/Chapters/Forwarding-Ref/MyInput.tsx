import { FC } from "react";

type InputProps = {
  label: string;
  inputref: any;
  value: string;
  changehandler: (e: any) => void;
};
const MyInput: FC<InputProps> = ({ inputref, label, changehandler, value }) => {
  const handleChange = (e: any) => {
    changehandler(e);
  };

  return (
    <>
      <label className="block">{label}</label>
      <input
        type="text"
        className="bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        ref={inputref}
        value={value}
        onChange={handleChange}
      ></input>
    </>
  );
};
export default MyInput;
