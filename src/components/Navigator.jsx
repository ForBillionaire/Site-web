import React from "react";
import styled from "styled-components";

const Navigator = () => {
  return (
    <NavWrapper>
      <NavContent>
        <NavLogo>
          <NavLogoImage src="/Site-web/Logo.svg"></NavLogoImage>
          <NavLogoName>Super Finance</NavLogoName>
        </NavLogo>
      </NavContent>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  box-shadow: 0px 3px grey;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NavLogo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 300px;
`;

const NavLogoImage = styled.img``;

const NavLogoName = styled.span`
  font-size: 4rem;
  font-family: "Gemunu-Libre-ExtraBold";
  font-weight: 900;
`;

export default Navigator;
