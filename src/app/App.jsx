import React, { memo, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
} from "react-router-dom";
import Toggle from "react-toggle";
import { useTheme } from "./controller";
import { LoadingSplash, CustomMouseCursor } from "./Components";
import "./styles/main.scss";
import Footer from "@ryqndev/footer";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  const { theme, toggle } = useTheme();

  return (
    <>
      <div
        className="t-w"
        onClick={toggle}
        data-mouse-hover="button"
        data-mouse-hover-text="toggle theme"
      >
        <Toggle checked={!!theme} icons={false} onChange={toggle} />
      </div>
      <CustomMouseCursor />
      <LoadingSplash>
        <>
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path="/">
                <Route index element={<Home theme={theme} />} />
              </Route>


            </Routes>
            
          </Suspense>
        </>


      </LoadingSplash> 
      <About/>
      <Contact/>


    </>
  );
};

export default memo(App);
