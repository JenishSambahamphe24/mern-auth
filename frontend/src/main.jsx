import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen.jsx";
import LoginScreen from "./Screen/LoginScreen.jsx";
import RegisterScreen from "./Screen/RegisterScreen.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

// state management
import store from "./store.js";
import { Provider } from "react-redux";
import ProfileScreen from "./Screen/ProfileScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/login" element={<LoginScreen />} />
      <Route index={true} path="/register" element={<RegisterScreen />} />
      {/* private Route */}
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
