import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactLogo from "../../images/Head.png";

function Header() {
  const [newNoti, setnewNoti] = useState("/");
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    if (location.pathname == "/ksa-futurebank/") {
      setTimeout(() => {
        // window.location.pathname = "/";
        // window.location.pathname = "/";
      }, 3000);
    }

    setnewNoti(location.pathname);
  }, [location]);

  return (
    <div>
      <header className="header-section ">
        <div className="overlay">
          <div className="container">
            <div className="row d-flex header-area">
              <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/ksa-futurebank/">
                  <img
                    alt="logo"
                    src={ReactLogo}
                    width={227}
                    height={57}
                    decoding="async"
                    data-nimg={1}
                    className="logo"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </a>

                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-content"
                >
                  <i>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                  </i>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-start"
                  id="navbar-content"
                >
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link" aria-current="page">
                        Home
                      </Link>
                    </li>
                    {/* <li className="nav-item">

                                            <Link to={"/About"} className="nav-link" aria-current="page">
                                                About Us
                                            </Link>

                                        </li> */}

                    <li className="nav-item">
                      <Link
                        to={"/Contact"}
                        className="nav-link"
                        aria-current="page"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbar-content"
                >
                  <div className="right-area header-action d-flex align-items-center">
                    <Link to={"/Login"} className="cmn-btn">
                      Login
                    </Link>
                    {/* <a className="cmn-btn" href="/Login">
                      Login
                    </a> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
