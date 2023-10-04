import React, { useEffect } from "react";

const myComponent = () => {
  useEffect(() => {
    document.title = "useEffect";
  }, []);
  return <div>
    <p>UseEffect example</p>
  </div>;
};

export default myComponent;
