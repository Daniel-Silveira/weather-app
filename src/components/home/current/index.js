import React from "react";
import { Image, View } from "react-native";
import { mathRound } from "../../../utils";
import DefaultText from "../../shared/defaultText";
import * as Styled from "./styled";

const Current = ({ current }) => {
  const weather = current?.weather?.[0];
  return (
    <Styled.Container>
      <DefaultText
        medium
        bold
        text={`${mathRound(current?.main?.temp_min)}°`}
      />
      <Styled.Group>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`,
          }}
          style={{ width: 100, height: 100 }}
        />
        <DefaultText title bold text={`${mathRound(current?.main?.temp)}°`} />
        <DefaultText text={weather?.main} subtitle />
      </Styled.Group>
      <DefaultText
        medium
        bold
        text={`${mathRound(current?.main?.temp_max)}°`}
      />
    </Styled.Container>
  );
};

export default Current;
