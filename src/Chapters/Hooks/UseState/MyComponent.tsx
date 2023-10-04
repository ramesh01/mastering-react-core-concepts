import React, { useState } from 'react'

const MyComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>count: {count}</p>
    </div>
  )
}

export default MyComponent