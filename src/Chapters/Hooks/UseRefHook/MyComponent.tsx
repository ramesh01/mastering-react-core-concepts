import React, { useRef } from "react";

const MyComponent = () => {
  const btnClickCount = useRef(0);
  const handleClick = () => {
    btnClickCount.current += 1;
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default MyComponent;
