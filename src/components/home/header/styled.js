import styled from "styled-components";
import Constants from "expo-constants";

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;
