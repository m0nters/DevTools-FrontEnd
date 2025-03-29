import { Route } from "react-router-dom";
import { UnauthenticatedRoute } from "../../components/common";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

export const Authentication = [
  <Route
    key="login"
    path="/login"
    element={
      <UnauthenticatedRoute>
        <Login />
      </UnauthenticatedRoute>
    }
  />,
  <Route
    key="register"
    path="/register"
    element={
      <UnauthenticatedRoute>
        <Register />
      </UnauthenticatedRoute>
    }
  />,
];
