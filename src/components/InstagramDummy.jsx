import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function InstagramDymmy(props) {
  return (
    <Wrapper to={``}>
      <ListImageBox>
        <img src={props.url} alt="제안사진" />
      </ListImageBox>
    </Wrapper>
  );
}

export const Wrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;

  outline: none;
  background-color: none;
`;

export const ListImageBox = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 175px;
  height: 175px;
  margin-right: 3px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
