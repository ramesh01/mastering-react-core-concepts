import React, { FC } from 'react'
import UpdatedComponent from './UpdatedComponent'

type inputProps = {
handleIncrease: () => void,
money: string
}
const PersonTwo: FC<inputProps> = ({handleIncrease, money}) => {
  return (
    <>
    <div>PersonTwo {money}</div>
    <button onClick={handleIncrease}>Increase</button>
    </>
  )
}

export default UpdatedComponent(PersonTwo);