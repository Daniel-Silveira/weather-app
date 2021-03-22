import React, { useState } from "react";
import { View } from "react-native";
import DefaultText from "../../shared/defaultText";
import * as Styled from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchGoogle from "../../searchGoogle";
import { useDispatch } from "react-redux";
import { requestCurrent, requestList } from "../../../redux/weather";

const Header = ({ current: { name } }) => {
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  return (
    <Styled.Container>
      {search ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SearchGoogle
            onPress={(_, details) => {
              const data = {
                latitude: details?.geometry?.location.lat,
                longitude: details?.geometry?.location.lng,
              };
              dispatch(requestCurrent(data));
              dispatch(requestList(data));
              return setSearch(false);
            }}
          />
          <Styled.Button onPress={() => setSearch(false)}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={24}
              color="#000"
            />
          </Styled.Button>
        </View>
      ) : (
        <>
          <Styled.Button></Styled.Button>
          <DefaultText text={name} medium bold black />
          <Styled.Button onPress={() => setSearch(true)}>
            <MaterialCommunityIcons
              name="map-search-outline"
              size={24}
              color="#000"
            />
          </Styled.Button>
        </>
      )}
    </Styled.Container>
  );
};

export default Header;
