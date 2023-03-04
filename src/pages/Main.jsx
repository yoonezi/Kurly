import React from "react";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import Banner from "../components/Banner";
import styled from "styled-components";

import Suggest from "../components/Suggest";
import LineBanner from "../Common/LineBanner";
import Deals from "../components/Deals";
import { Link } from "react-router-dom";
import Instagram from "../components/Instagram";

/* <div class="swiper-slide" style="width: 249px; margin-right: 18px;"><a href="/goods/5000493" class="e1phasb50 e14udynn0 css-2f8wuk e1cmg4vm6"><div class="image-container css-8i9ear e3um3060"><img src="https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653037360341l0.jpg" alt="상품 이미지" loading="lazy"><div><button type="button" class="product-function css-cqz1s5 e17x72af0"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"></button></div></div><div class="product-info css-1ud9i0q e1cmg4vm5"><h3 class="product-name">[칼라마타] 엑스트라버진 실버틴 올리브 오일</h3><div class="content-row css-1066lcq e1cmg4vm4"><div class="product-price css-1fttcpj ei5rudb2"><div><span class="sales-price css-18tpqqq ei5rudb1">16,900<span class="won">원</span></span></div></div></div><div class="review-count css-10yu924 e1cmg4vm2"><div class="review-icon css-0 e1cmg4vm1"><svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_1513_17755" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"></path></mask><path fill="#999" d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z" mask="url(#path-1-inside-1_1513_17755)"></path><circle fill="#999" cx="4.34998" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="6.75" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="9.15002" cy="6.17871" r="0.75"></circle></svg></div>후기<span class="review-number css-l610kl e1cmg4vm0">999+</span></div></div></a></div> */

export default function Main() {
  return (
    <>
      <Header />
      <NavHeader />
      <Banner />
      <MainWrap>
        <MainTitle>
          <span>이 상품 어때요?</span>
        </MainTitle>
        <Suggest />
      </MainWrap>

      <LineBanner />

      <Deals />
      <MainWrap>
        <MainTitle>
          <span>놓치면 후회할 가격 {">"}</span>
        </MainTitle>
        <Suggest />
        <TotalViewBtn>
          <span>과일·견과·쌀 전체보기 </span>
        </TotalViewBtn>
      </MainWrap>
      <MainWrap>
        <MainTitle>
          <span>밀키트 인기리스트! &gt;</span>
          <h4>그냥 따라 만들면 내가 바로 쉐프👩‍🍳</h4>
        </MainTitle>
        <Suggest />
      </MainWrap>
      <MainWrap>
        <MainTitle>
          <span style={{ marginBottom: "27px" }}>오늘의 카테고리 랭킹</span>

          <ul>
            <li>
              <button type="button">채소</button>
            </li>
            <li>
              <button type="button">과일 · 견과 · 쌀</button>
            </li>
            <li>
              <button type="button">수산 · 해산 · 건어물</button>
            </li>
            <li>
              <button type="button">정육 · 계란</button>
            </li>
            <li>
              <button type="button">국 · 반찬 · 메인요리</button>
            </li>
            <li>
              <button type="button">샐러드 · 간편식</button>
            </li>
            <li>
              <button type="button">면 · 양념 · 오일</button>
            </li>
            <li>
              <button type="button">생수 · 음료</button>
            </li>
            <li>
              <button type="button">간편식 TOP50</button>
            </li>
            <li>
              <button type="button">간식 TOP50</button>
            </li>
            <li>
              <button type="button">베이커리 TOP50</button>
            </li>
            <li>
              <button type="button">국·반찬 TOP50</button>
            </li>
            <li>
              <button
                type="button"
                style={{
                  backgroundColor: "#5f0080",
                  color: "white",
                }}
              >
                유제품 TOP50
              </button>
            </li>
            <li>
              <button type="button">주방 TOP50</button>
            </li>
            <li>
              <button type="button">뷰티 TOP50</button>
            </li>
          </ul>
        </MainTitle>
        <Suggest />
      </MainWrap>
      <MainWrap>
        <MainTitle>
          <span>인스타그램 고객 후기</span>
          <h4>더 많은 고객 후기가 궁금하다면?</h4>
        </MainTitle>
        <Instagram />
      </MainWrap>
    </>
  );
}

export const MainWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
`;

export const MainTitle = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  & span {
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    position: relative;
    display: flex;
    padding: 8px 0px 8px 8px;
    /* margin-bottom: 27px; */
  }
  & h4 {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.45;
    letter-spacing: -0.2px;
    text-align: center;
    color: rgb(153, 153, 153);
    margin: 0px;
    margin-top: 2px;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    place-content: center;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    place-content: center;
  }
  & li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  & button {
    display: block;
    padding: 10px 20px;
    border-radius: 22px;
    margin: 0px 5px 20px;
    font-size: 14px;
    height: 40px;
    line-height: 16px;
    background-color: rgb(247, 247, 247);
    color: rgb(51, 51, 51);
    border: none;
  }
`;

const TotalViewBtn = styled(Link)`
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 516px;
  height: 56px;
  border-radius: 3px;
  border: 1px solid rgb(227, 227, 227);
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  & span {
    padding: 0px 17px;
    background-size: 18px 18px;
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 15px;
  }
`;
