import React from "react";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import styled from "styled-components";
import Layouts from "../Common/Layout";
import { productlist } from "../ProductDummy";
import NewItemList from "../components/NewItemList";
import ViewContent from "./Product";

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
          <NewItemFilter>
            <FilterTitle>
              <span>필터</span>
            </FilterTitle>
            <div>
              <FilterCategory>
                <button>
                  <h3>카테고리</h3>
                </button>
                <FilterClick>
                  <ViewContent />
                  {/* <li>
                    <a href="/">
                      <span>국·반찬·메인요리</span>
                      <h3>32</h3>
                    </a>
                  </li> */}
                </FilterClick>
              </FilterCategory>
            </div>
          </NewItemFilter>
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
  color: #333333;
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

export const NewItemFilter = styled.div`
  position: sticky;
  width: 220px;
  flex-shrink: 0;
  height: 100%;
  max-height: calc(100vh - 120px);
  top: 80px;
  margin-right: 47px;

  /* overflow: hidden scroll; */
`;

export const FilterTitle = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  z-index: 20;
  -webkit-box-pack: justify;
  /* justify-content: space-between; */
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  line-height: 20px;

  & span {
    font-weight: 500;
    font-size: 15px;
    color: rgb(51, 51, 51);
  }
`;

export const FilterClick = styled.ul`
  max-height: 100vh;
  opacity: 1;
  list-style-type: none;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  font-size: 14px;
  color: #333;

  & li {
    margin-top: 9px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 18px;
    & a {
      background-color: transparent;
      text-decoration: none;
      color: inherit;
      display: flex;
      & span {
        margin-right: 4px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: rgb(51, 51, 51);
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & h3 {
        flex-shrink: 0;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: rgb(204, 204, 204);
      }
    }
  }
`;

export const FilterCategory = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
  & button {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 52px;
    overflow: hidden;
    background-color: transparent;
    border: none;
    padding: 0;
    font-weight: 500;
    font-size: 15px;
    color: rgb(51, 51, 51);
  }
  & ul {
  }
`;
