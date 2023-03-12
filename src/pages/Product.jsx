import React, { useState } from "react";
import styled from "styled-components";

const ViewContent = ({ children }) => {
  const [hanpy, setHanpy] = useState(false);
  const handleView = () => {
    setHanpy(!hanpy);
  };
  return (
    <>
      <TestBtn onClick={handleView}>카테고리</TestBtn>
      {hanpy ? <ul> {children} </ul> : <></>}
    </>
  );
};

export default ViewContent;

export const TestBtn = styled.button``;
