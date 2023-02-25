import {
  HeadTop,
  UserHead,
  HeadUserLink,
  HeadeVertical,
  ServiceCenter,
  ServiceIcon,
  ServiceNav,
  HeadMain,
  HeadLeft,
  LogoButton,
  HeadCenter,
  SearchForm,
  HeadRight,
  HeadRightContents,
  CartIconWrap,
  LogoBeutyButton,
} from "./styles";
import logo from "./logo.svg";
import "./styles.css";

export default function Header() {
  return (
    <>
      <HeadTop>
        <UserHead>
          <>
            <HeadUserLink to="/join">회원가입</HeadUserLink>
            <HeadeVertical />
            <HeadUserLink to="/login" style={{ color: "inherit" }}>
              로그인
            </HeadUserLink>
          </>

          <HeadeVertical />
          <ServiceCenter>
            <HeadUserLink to="/" style={{ color: "inherit" }}>
              고객센터
              <ServiceIcon />
              <ServiceNav>
                <div>공지사항</div>
                <div>자주하는 질문</div>
                <div>1:1 문의</div>
                <div>대량주문 문의</div>
              </ServiceNav>
            </HeadUserLink>
          </ServiceCenter>
        </UserHead>
        <HeadMain>
          <HeadLeft to="/">
            <img src={logo} alt="마켓컬리 로고" />
            <LogoButton>마켓컬리</LogoButton>
            <LogoBeutyButton className="LogoBeutyButton">
              뷰티컬리
            </LogoBeutyButton>
          </HeadLeft>
          <HeadCenter>
            <SearchForm>
              <input placeholder="검색어를 입력해주세요" required />
              <button></button>
            </SearchForm>
          </HeadCenter>
          <HeadRight>
            <HeadRightContents>
              <div></div>
              <button aria-label="찜하기" type="button"></button>
              <CartIconWrap>
                <button></button>
              </CartIconWrap>
            </HeadRightContents>
          </HeadRight>
        </HeadMain>
      </HeadTop>
    </>
  );
}
