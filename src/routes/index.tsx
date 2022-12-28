import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Publication } from "../Pages/Publication";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/publicacao/:publicationId"
              element={<Publication />}
            />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
