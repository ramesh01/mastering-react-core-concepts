import React, { FC } from "react";
import UpdatedComponent from "./UpdatedComponent";

type inputProps = {
  handleIncrease: () => void;
  money: string;
};

const PersonOne: FC<inputProps> = ({ handleIncrease, money }) => {
  return (
    <>
      <div>PersonOne {money}</div>
      <button onClick={handleIncrease}>Increase btn</button>
    </>
  );
};

export default UpdatedComponent(PersonOne);
