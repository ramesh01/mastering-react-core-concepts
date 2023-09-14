import React, { FC, useState } from 'react'

type PropAndStateProps = {
    name: string
}
const PropAndState: FC<PropAndStateProps> = ({name}) => {
    const [value, setValue] = useState(1);
  return (
    <div>{name} {value} </div>
  )
}

export default PropAndState;