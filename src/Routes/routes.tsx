import { Route, Routes } from "react-router-dom";
import { Links } from "./Links";
import AppLayout from "../Layouts/AppLayout";
import Home from "../pages/home";
import About from "pages/about";
import Project from "pages/project";
import Skills from "pages/skills";
// import Contact from "pages/contact";
import { lazy, Suspense } from "react"

const Contact = lazy(() => import('pages/contact'));

const AppRoutes = () => {

  return (

    <Routes>
      <Route path={Links.app.home} element={<AppLayout />}>
        <Route path={Links.app.home} element={<Home />} />
        <Route path={Links.app.about} element={<About />} />
        <Route path={Links.app.project} element={<Project />} />
        <Route path={Links.app.skills} element={<Skills />} />
        <Route path={Links.app.contact} element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
