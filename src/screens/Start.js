import React from "react";
import styled from "styled-components/native";

const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex: 3.7;
  align-items: center;
  margin-top: 23%;
`;

const Logo = styled.Image``;

const Subtitle = styled.Text`
  font-family: "KOTRA";
  color: white;
  font-size: 23px;
  margin-top: -25px;
`;

const StartContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TouchToStart = styled.Text`
  font-family: "KOTRA";
  color: white;
  font-size: 23px;
`;

const Start = () => {
  return (
    <BackgroundImg
      source={require("../assets/images/start.jpg")}
      resizeMode={"cover"}
    >
      <TitleContainer>
        <Logo source={require("../assets/images/logo.png")} />
        <Subtitle>- 끊어진 연결고리 -</Subtitle>
      </TitleContainer>
      <StartContainer>
        <TouchToStart>Touch to Start</TouchToStart>
      </StartContainer>
    </BackgroundImg>
  );
};

export default Start;
