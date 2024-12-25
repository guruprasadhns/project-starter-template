import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home-page"));

export default () => (
  <>
    <Route key="home-page-default" path="/" element={<HomePage />} />
    <Route key="home-page" path="/home" element={<Navigate to="/" />} />
  </>
);
