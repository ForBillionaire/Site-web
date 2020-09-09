import React from 'react';
import styled from 'styled-components';

const HomeLayout = ({ handleButtonClick }) => {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src="/London_street_Time_lapse.mp4" type="video/mp4" />
      </Video>
      <Background></Background>
      <Content>
        <Header>Super Finance</Header>
        <Description>
          당신만을 위한 주식 서비스
          <br /> Super Finance입니다.
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
  width: 100%;
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
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
  position: absolute;
  width: 100%;
`;

const Header = styled.h1`
  color: #79fe7e;
  font-family: Megrim;
  font-size: 80px;
`;

const Description = styled.pre`
  font-size: 60px;
`;

const UserCounter = styled.span`
  font-size: 24px;
`;

const Button = styled.button`
  background: transparent;
  border: 4px solid white;
  border-radius: 8px;
  color: white;
  font-size: 25px;
  font-weight: 700;
  height: 60px;
  width: 30%;
  :hover {
    border-color: #79fe7e;
    cursor: pointer;
  }
`;

const FooterMessage = styled.div`
  position: fixed;
  color: white;
  bottom: 3%;
`;

export default HomeLayout;
