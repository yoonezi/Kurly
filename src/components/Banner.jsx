import React, { useCallback, useState } from "react";
import styled from "styled-components";
import useInterval from "../Hooks/useInterval";

const slides = [
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a2fd2580-9d12-4067-85bc-b061b91491a8.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f7f53161-159b-4734-a9cf-e3d1d6f6216b.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/153e3da8-6fd6-4388-b166-a7e9f4acd744.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/33809bc3-b299-4bb5-812d-67836ce7865c.png",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a919be13-7bd4-41f8-b094-3a03147f6bba.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f3a2ece9-d807-4071-bd2a-39e5f398920f.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/4567578c-de77-43f1-818e-87eeb7f90768.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/4ee2cc2f-38d0-4aa3-bc50-627f09b8ba3a.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9cd38c16-ae30-465a-b33a-efeb8affb53e.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/20139e33-d871-4de9-a2e8-18a3024af36d.jpg",
  },
  {
    src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/a1f86827-2130-4806-b56d-481b31701dcb.jpg",
  },
  {
    src: " https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/54c92cec-f9b4-4057-9bc5-404b3d671558.jpg",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Interval, setInterval] = useState(false);

  useInterval(
    () => {
      // currentIndex === slides.length 이 되면 12장인데 13장까지 감 >whg? 배열은 0부터 시작하기 때문에
      if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      } else {
        // currentIndex + 1 인 이유는 배열은 0부터 시작하지만 표시할건 1부터이기때문에
        setCurrentIndex(currentIndex + 1);
      }
    },
    // delay : 실행 전 대기 시간으로, 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0입니다.
    Interval ? null : 2000
  );

  return (
    <MainBanner>
      <SwiperWrap>
        <Swiper>
          <SlideWrap
            style={{
              transform: `translateX(${currentIndex * -100}%) `,
            }}
          >
            {slides.map((list, idx) => {
              return (
                <SlideItem key={idx}>
                  <img src={list.src} alt="배너이미지" />
                </SlideItem>
              );
            })}
          </SlideWrap>
        </Swiper>
        <BannerCount>
          {currentIndex + 1} / {slides.length}
        </BannerCount>
      </SwiperWrap>
    </MainBanner>
  );
}

export const MainBanner = styled.div`
  height: auto;
`;

export const SwiperWrap = styled.div`
  position: relative;
  max-width: 1900px;
  height: 370px;
  margin: 0px auto 40px;
`;

export const Swiper = styled.div`
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

export const SlideWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

export const SlideItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  cursor: pointer;

  & img {
    width: 100%;
    min-width: 1050px;
    height: 370px;
    object-fit: cover;
  }
`;

export const BannerCount = styled.div`
  position: absolute;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.15);
  z-index: 10;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 55px;
  height: 23px;
  right: 109px;
  bottom: 20px;
  line-height: 23px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 12px;
`;
