import React from "react";
import * as Styled from "./styled";

const DefaultText = ({ text, ...rest }) => {
  return <Styled.Text {...rest}>{text}</Styled.Text>;
};

export default DefaultText;
