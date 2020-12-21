import React from "react";
import * as Styled from "./styled";
import Header from "../components/home/header";
import List from "../components/home/list";
import Current from "../components/home/current";
import { useSelector } from "react-redux";
import Loading from "../components/shared/loading";

const HomeScreen = () => {
  const {
    weather: { current, list, loading },
  } = useSelector((value) => value);

  console.log(loading);
  return (
    <Styled.Gradient colors={["#70e9e0", "#6aa5df"]}>
      {loading ? (
        <Loading center size={150} />
      ) : (
        <>
          <Header current={current} />
          <Current current={current} />
          <List list={list} />
        </>
      )}
    </Styled.Gradient>
  );
};

export default HomeScreen;
