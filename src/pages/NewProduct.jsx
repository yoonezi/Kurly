import React from "react";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import styled from "styled-components";
import Layouts from "../Common/Layout";

export default function NewProduct() {
  return (
    <>
      <Header />
      <NavHeader />
      <Layouts>
        <NewProBanner>
          <img
            src="https://collection-image.kurly.com/product-collections/2451/6pddBxhXhpA5o35T4Xd4FvpxnA6u11eTsZnwdXSb.png"
            alt="배너 이미지"
          />
        </NewProBanner>
        <NewProTitle>신상품</NewProTitle>
      </Layouts>
    </>
  );
}

export const NewProBanner = styled.div`
  padding-bottom: 28px;
  text-align: center;
  & img {
    width: 100%;
    vertical-align: top;
    cursor: pointer;
    border: 0;
    max-width: 100%;
  }
`;

export const NewProTitle = styled.h3`
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`;
