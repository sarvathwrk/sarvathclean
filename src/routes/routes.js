import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "../Screens/Component/Loader";
import ErrorBoundary from "../Screens/Component/Error";

import Header from "../Screens/Head/Header";
import Footer from "../Screens/Head/Footer";

const Home = React.lazy(() => import("../Screens/Public/home"));
const Contact = React.lazy(() => import("../Screens/Public/Contact"));
const Login = React.lazy(() => import("../Screens/Public/Login"));

const public_head = [
  {
    link: "/",
    compenent: Home,
  },

  {
    link: "/Contact",
    compenent: Contact,
  },
  {
    link: "/Login",
    compenent: Login,
  },
  {
    link: "/ksa-futurebank",
    compenent: Home,
  },
];
export default function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            {public_head &&
              public_head.map((ival, i) => {
                return (
                  <Route
                    exact
                    path={ival.link}
                    key={ival.link}
                    element={<ival.compenent />}
                  />
                );
              })}
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </BrowserRouter>
  );
}
