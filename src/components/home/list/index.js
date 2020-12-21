import React from "react";
import DefaultText from "../../shared/defaultText";
import * as Styled from "./styled";
import { Image, View } from "react-native";
import { getDay } from "../../../utils";

const List = ({ list: { daily } }) => {
  return (
    <Styled.Container>
      <DefaultText bold text="Next days" medium />
      <Styled.Scroll>
        {daily?.map(
          (i, index) =>
            !!index && (
              <Styled.Item key={index}>
                <Styled.Group>
                  <Image
                    source={{
                      uri: `http://openweathermap.org/img/wn/${i?.weather?.[0].icon}@2x.png`,
                    }}
                    style={{ width: 50, height: 50 }}
                  />
                  <DefaultText bold text={getDay(i.dt)} />
                </Styled.Group>
                <DefaultText bold text={`${Math.round(i?.temp?.day)}°`} />
              </Styled.Item>
            )
        )}
      </Styled.Scroll>
    </Styled.Container>
  );
};

export default List;
