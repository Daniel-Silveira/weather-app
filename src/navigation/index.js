import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import { useDispatch } from "react-redux";
import { requestCurrent, requestList } from "../redux/weather";
import * as Location from "expo-location";

const Stack = createStackNavigator();

const Navigation = () => {
  const defaultOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: "#fff",
    },
  };
  const dispatch = useDispatch();

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    dispatch(requestCurrent(location.coords));
    dispatch(requestList(location.coords));
  };

  React.useEffect(() => {
    getLocation();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={defaultOptions}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
