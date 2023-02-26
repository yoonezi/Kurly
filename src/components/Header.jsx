import { ServiceCenter, ServiceNav } from "./styles";
import logo from "./logo.svg";
import "./styles.css";

export default function Header() {
  return (
    <>
      <div className="HeadTop">
        <div className="UserHead">
          <>
            <div className="HeadUserLink" to="/join">
              회원가입
            </div>
            <div className="HeadeVertical" />
            <div
              className="HeadUserLink"
              to="/login"
              style={{ color: "inherit" }}
            >
              로그인
            </div>
          </>

          <div className="HeadeVertical" />
          <ServiceCenter>
            <div className="HeadUserLink" to="/" style={{ color: "inherit" }}>
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
            <div className="LogoButton">마켓컬리</div>
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
