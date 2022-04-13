import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import RepositoriesProvider from "../context/app-context";

import Dashboard from "../pages/Dashboard";
import UserProfile from '../pages/UserProfile/index';

const AppRoutes: React.FC = () => (
    <RepositoriesProvider>
      <Header />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/user-profile" element={ <UserProfile /> } />
      </Routes>
    </RepositoriesProvider>
);

export default AppRoutes;
