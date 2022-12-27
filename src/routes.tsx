import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { Home } from "./Pages/Home";
import { Publication } from "./Pages/Publication";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/publicacao/:publicationId" element={<Publication />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
