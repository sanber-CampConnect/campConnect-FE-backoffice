import React, { useEffect } from "react";
import axios from "axios";
import setupAxios from "../utils/SetupAxios";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routeList from "./RouteList";
import { useSelector, useDispatch } from "react-redux";

const RouteRenderer = () => {
  const token = useSelector((state) => state.auth.user.token);
  const isLoggedIn = token !== null;
  const element = useRoutes(routeList(isLoggedIn));
  return <React.Fragment>{element}</React.Fragment>;
};

export default function RouteComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    setupAxios(axios, dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <RouteRenderer />
    </BrowserRouter>
  );
}
