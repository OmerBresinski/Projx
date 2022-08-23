import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "@/pages";
import { paths } from "@/pages/paths";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Pages.Home />} />
      </Routes>
    </BrowserRouter>
  );
};
