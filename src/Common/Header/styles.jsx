import styled from "styled-components";

export const ServiceNav = styled.div`
  position: absolute;
  right: 0px;
  top: 34px;
  width: 102px;
  padding: 3px 9px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  display: none;
  & > div {
    display: block;
    height: 24px;
    line-height: 24px;
    color: rgb(64, 64, 64);
    cursor: pointer;
  }
`;

export const ServiceCenter = styled.div`
  line-height: 35px;
  position: relative;
  & :hover ${ServiceNav} {
    display: block;
  }
`;
