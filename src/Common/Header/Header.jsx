import { ServiceCenter, ServiceNav } from "./styles";
import logo from "./logo.svg";
import "./styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="HeadTop">
        <div className="UserHead">
          <>
            <HeadUserLink className="HeadUserLink" to="/signup">
              회원가입
            </HeadUserLink>

            <div className="HeadeVertical" />

            <HeadUserLink
              className="HeadUserLink"
              to="/login"
              style={{ color: "#333" }}
            >
              로그인
            </HeadUserLink>
          </>

          <div className="HeadeVertical" />

          <ServiceCenter>
            <div className="HeadUserLink" to="/" style={{ color: "#333" }}>
              고객센터
              <div className="ServiceIcon" />
              <ServiceNav>
                <div>공지사항</div>
                <div>자주하는 질문</div>
                <div>1:1 문의</div>
                <div>대량주문 문의</div>
              </ServiceNav>
            </div>
          </ServiceCenter>
        </div>

        <div className="HeadMain">
          <div className="HeadLeft" to="/">
            <img src={logo} alt="마켓컬리 로고" />
            <HeadUserLink className="LogoButton" to="/">
              마켓컬리
            </HeadUserLink>
            <div className="HeadeVertical" style={{ marginRight: "-6px" }} />
            <div className="LogoBeutyButton">뷰티컬리</div>
          </div>
          <div className="HeadCenter">
            <div className="SearchForm">
              <input placeholder="검색어를 입력해주세요" required />
              <button></button>
            </div>
          </div>
          <div className="HeadRight">
            <div className="HeadRightContents">
              <div></div>
              <button aria-label="찜하기" type="button"></button>
              <div className="CartIconWrap">
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const HeadUserLink = styled(Link)`
  display: block;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  color: rgb(95, 0, 128);
`;
