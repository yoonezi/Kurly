import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LineBanner = () => {
  return (
    <>
      {/* 구성 : 1. 전체 박스로 크개 뮦어주고, 안에 div로 상하 간격 조정해주기 2. a링크 태그로 넣어주고 그 안에 img 넣어주기 */}
      <LineBannerWrap>
        <div>
          <BannerLink to="/">
            <img
              src="https://product-image.kurly.com/banner/random-band/pc/img/9a3d460d-a540-4c9c-af2c-07750bdf694d.jpg"
              alt="라인배너"
            />
          </BannerLink>
        </div>
      </LineBannerWrap>
    </>
  );
};

export default LineBanner;

const LineBannerWrap = styled.div`
  height: 100%;
  /* 상하는 마진없이 패딩으로만 조절 */
  & div {
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
  }
`;

const BannerLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  height: 140px;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    border: 0;
  }
`;
