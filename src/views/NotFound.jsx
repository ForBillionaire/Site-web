import React from "react";
import styled from "styled-components";

const NotFoundView = () => {
  return (
    <Container>
      <Content>
        <Header>이런!</Header>
        <Description>찾으시는 페이지가 없는 것 같습니다.</Description>
        <Link href="/">메인 페이지로 돌아가기</Link>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffefba;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40%;
`;

const Header = styled.h1`
  font-size: 6rem;
  font-weight: 900;
`;

const Description = styled.span`
  font-size: 3rem;
  font-weight: 500;
`;

const Link = styled.a`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
  text-decoration: none;
  :hover {
    color: #812ec9;
  }
`;

export default NotFoundView;
