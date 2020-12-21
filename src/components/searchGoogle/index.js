import React from "react";
import { Keyboard } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const stylesDefault = {
  container: {
    zIndex: 999999,
    width: "100%",
    marginRight: "4%",
  },
  textInputContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  textInput: {
    height: 45,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
  description: {},
  predefinedPlacesDescription: {
    color: "#000",
  },
  listView: {
    width: "100%",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    margin: 0,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#ddd",
  },
};
const SearchGoogle = ({ styles, getRef, address, ...rest }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Ex: Avenida Paulista"
      returnKeyType={"search"}
      fetchDetails={true}
      keyboardAppearance={"dark"}
      enablePoweredByContainer={false}
      onBlur={Keyboard.dismiss}
      styles={{ ...stylesDefault, ...styles }}
      getDefaultValue={() => address || ""}
      {...rest}
      ref={getRef}
      query={{
        key: "AIzaSyCLpwPw28vHKExS-qDP6uMyF7LWz1B87oY",
        language: "pt",
      }}
      filterReverseGeocodingByTypes={[
        "locality",
        "administrative_area_level_3",
      ]}
    />
  );
};

export default SearchGoogle;
