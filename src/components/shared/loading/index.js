import React from "react";
import LottieView from "lottie-react-native";
import { Container } from "./styled";

const Loading = ({ center, size }) => {
  return (
    <Container center={center}>
      <LottieView
        source={require("./loading.json")}
        autoPlay
        loop
        style={{ width: size || 24, height: size || 24 }}
      />
    </Container>
  );
};

export default Loading;
