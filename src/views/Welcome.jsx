import React from "react";
import styled from "styled-components";

const WelcomeView = ({ handleButtonClick }) => {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src="/Site-web/London_street_Time_lapse.mp4" type="video/mp4" />
      </Video>
      <Background></Background>
      <Content>
        <Header>Super Finance</Header>
        <Description>
          당신만을 위한 주식 서비스 Super Finance입니다.
        </Description>
        <UserCounter>현재 54738명이 이용중입니다.</UserCounter>
        <Button type="button" onClick={handleButtonClick}>
          시작하기
        </Button>
      </Content>
      <FooterMessage>Powered by SuperFinance</FooterMessage>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const Background = styled.div`
  background-color: black;
  opacity: 0.7;
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50%;
`;

const Header = styled.h1`
  color: #79fe7e;
  font-family: Megrim;
  font-size: 9rem;
`;

const Description = styled.div`
  font-size: 5rem;
  word-break: break-all;
  width: 55rem;
`;

const UserCounter = styled.span`
  font-size: 2.4rem;
`;

const Button = styled.button`
  background: transparent;
  border: 4px solid white;
  border-radius: 8px;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  height: 5rem;
  width: 60%;
  :hover {
    border-color: #79fe7e;
    cursor: pointer;
  }
`;

const FooterMessage = styled.div`
  position: fixed;
  color: white;
  bottom: 3%;
  font-size: 1.6rem;
`;

export default WelcomeView;
