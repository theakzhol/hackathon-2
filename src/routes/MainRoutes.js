import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FavoritePage from "../pages/FavoritePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/create", element: <CreatePage />, id: 2 },
    { link: "/login", element: <LoginPage />, id: 3 },
    { link: "/register", element: <RegisterPage />, id: 4 },
    { link: "/favorite", element: <FavoritePage />, id: 5 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
