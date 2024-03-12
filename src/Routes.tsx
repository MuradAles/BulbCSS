import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/views/home-page"));
const Test = lazy(() => import("./components/views/test-page"));
export const Routes_dom = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};
