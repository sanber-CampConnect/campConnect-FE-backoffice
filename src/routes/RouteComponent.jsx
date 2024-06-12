import React from "react";
import axios from "axios";
import setupAxios from "../utils/SetupAxios";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routeList from "./RouteList";
import { useSelector, useDispatch } from "react-redux";

const RouteRenderer = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user.token);
  const isLoggedIn = token !== null ? true : false;
  const element = useRoutes(routeList(isLoggedIn));
  setupAxios(axios, dispatch);
  return <React.Fragment>{element}</React.Fragment>;
};

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <RouteRenderer />
    </BrowserRouter>
  );
}
