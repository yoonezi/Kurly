import React from "react";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import styled from "styled-components";
import Layouts from "../Common/Layout";
import { productlist } from "../ProductDummy";
import NewItemList from "../components/NewItemList";

export default function NewItem() {
  return (
    <>
      <Header />
      <NavHeader />
      <Layouts>
        <NewItemBanner>
          <img
            src="https://collection-image.kurly.com/product-collections/2451/6pddBxhXhpA5o35T4Xd4FvpxnA6u11eTsZnwdXSb.png"
            alt="배너 이미지"
          />
        </NewItemBanner>
        <NewItemTitle>신상품</NewItemTitle>
        <NewItemBottom>
          <NewItemFilter>필터</NewItemFilter>
          <NewItemMain>
            <NewItemMainTop>
              <MainTopTotal>총 235건</MainTopTotal>
              <MainTopRight>
                <li>
                  <a href="/">추천순</a>
                </li>
                <HeadeVertical></HeadeVertical>
                <li>
                  <a style={{ color: "#333333", cursor: "default" }} href="/">
                    신상품순
                  </a>
                </li>
                <HeadeVertical></HeadeVertical>
                <li>
                  <a href="/">판매량순</a>
                </li>
                <HeadeVertical></HeadeVertical>
                <li>
                  <a href="/">혜택순</a>
                </li>
                <HeadeVertical></HeadeVertical>
                <li>
                  <a href="/">낮은 가격순</a>
                </li>
                <HeadeVertical></HeadeVertical>
                <li>
                  <a href="/">높은 가격순</a>
                </li>
              </MainTopRight>
            </NewItemMainTop>
            <NewItemWrap>
              {productlist.map((item) => {
                return (
                  <NewItemList
                    text={item.text}
                    url={item.url}
                    price={item.price}
                  />
                );
              })}
            </NewItemWrap>
          </NewItemMain>
        </NewItemBottom>
      </Layouts>
    </>
  );
}

export const NewItemBanner = styled.div`
  text-align: center;
  & img {
    width: 100%;
    vertical-align: top;
    cursor: pointer;
    border: 0;
    max-width: 100%;
  }
`;

export const NewItemTitle = styled.h3`
  margin-top: 50px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`;

export const NewItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 249px);
  gap: 31px 18px;
  width: 100%;
`;

export const NewItemBottom = styled.div`
  position: relative;
  display: flex;
  width: 1050px;
  margin-top: 50px;
  margin-bottom: 75px;
`;

export const NewItemFilter = styled.div`
  position: sticky;
  width: 220px;
  flex-shrink: 0;
  height: 100%;
  max-height: calc(100vh - 120px);
  top: 80px;
  margin-right: 47px;
  border-bottom: 1px solid rgb(238, 238, 238);
  overflow: hidden scroll;
`;

export const NewItemMain = styled.div`
  width: 100%;
`;

export const NewItemMainTop = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 20px;
  line-height: 20px;
`;
export const MainTopTotal = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgb(51, 51, 51);
`;
export const MainTopRight = styled.ul`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  & li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    /* margin-left: 8px; */
    font-size: 14px;
    color: rgb(153, 153, 153);
  }

  & a {
    background-color: transparent;
    text-decoration: none;
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
`;

export const HeadeVertical = styled.div`
  width: 1px;
  height: 13px;
  margin: 0px 8px;
  background-color: rgb(217, 217, 217);
`;
