import { createLogic } from "redux-logic";
import {
  requestCurrentSuccess,
  requestListSuccess,
  REQUEST_CURRENT,
  REQUEST_LIST,
  setLoading,
} from ".";
import http from "../api";

const apiKey = "ed30f5af4a1f19517164528304633333";

export const handleRequestCurrentWeather = () => {
  return createLogic({
    type: REQUEST_CURRENT,
    process(
      {
        action: {
          payload: { coords },
        },
      },
      dispatch,
      done
    ) {
      dispatch(setLoading(true));
      http
        .get(
          `/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`
        )
        .then((res) => res.data)
        .then((current) => {
          dispatch(requestCurrentSuccess({ current }));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log("err", err);
        })
        .finally(done);
    },
  });
};

export const handleRequestNextDays = () => {
  return createLogic({
    type: REQUEST_LIST,
    process(
      {
        action: {
          payload: { coords },
        },
      },
      dispatch,
      done
    ) {
      dispatch(setLoading(true));
      http
        .get(
          `/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
        )
        .then((res) => res.data)
        .then((list) => {
          dispatch(requestListSuccess({ list }));
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log("err", err);
        })
        .finally(done);
    },
  });
};

const configureWeatherLogics = () => {
  return [handleRequestCurrentWeather(), handleRequestNextDays()];
};

export default configureWeatherLogics;
