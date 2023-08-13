import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import ReactLogo from '../../images/Head.png';

function Footer() {
    const [newNoti, setnewNoti] = useState("/");
    const location = useLocation()
    useEffect(() => {
        setnewNoti(location.pathname)
    }, [location]);

    return (
      <div>
        <div className="footer-section">
          <div className="container" style={{ paddingTop: "40px" }}>
            <div
              className="row cus-mar  justify-content-between wow fadeInUp"
              style={{ paddingBottom: "40px" }}
            >
              <div className="col">
                <div className="footer-box">
                  <a className="logo" href="/ksa-futurebank/">
                    <img
                      alt="logo"
                      src={ReactLogo}
                      width={227}
                      height={57}
                      decoding="async"
                      data-nimg={1}
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <p>
                    Digital Innovations Transforming the Kingdom's Banking
                    Landscape.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="footer-box">
                  <h5>Social Connection</h5>
                  <p>
                    Digital Innovations Transforming the Kingdom's Banking
                    Landscape.
                  </p>
                  <div className="social-link d-flex align-items-center">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/vervemanagementuae/"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                    <a href="https://twitter.com/vervemgmtuae" target="_blank">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/verve-management"
                      target="_blank"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/vervemanagement/"
                      target="_blank"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="footer-box">
                  <h5>Verve Management</h5>
                  <div className="textwidget custom-html-widget">
                    <i className="fa fa-map" /> 1702 &amp; 1706, Mazaya Business
                    Avenue BB2, Jumeirah Lakes Towers, Dubai, UAE <br />
                    <br />
                    <i className="fa fa-phone" aria-hidden="true" /> +971 4 243
                    4677/88 <br />
                    <br />
                    <i className="fa fa-envelope" aria-hidden="true" />{" "}
                    info@verve-management.com
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom">
                  <div className="left">
                    <p>
                      {" "}
                      {/* */}© 2023 Future Banks Summit | All Rights Reserved by{" "}
                      <a href="https://www.verve-management.com/">
                        <b>VERVE MANAGEMENT</b>
                      </a>{" "}
                      | Designed by{" "}
                      <a href="https://drive.google.com/file/d/1SOupWplpomjHf_C5TJamYkiS6Nl43Nnf/view?usp=drivesdk">
                        <b>MOHAMED SARVATH KHAN</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-area">
            <img
              alt="Images"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-Illu-left.e6386b85.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-Illu-left.e6386b85.png&w=640&q=75 2x"
              src="_next/footer-Illu-lefte0ca.png?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-Illu-left.e6386b85.png&w=640&q=75"
              width={286}
              height={287}
              decoding="async"
              data-nimg={1}
              className="left"
              loading="lazy"
              style={{ color: "transparent" }}
            />
            <img
              alt="Images"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-Illu-right.e28d7bc5.png&w=384&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-Illu-right.e28d7bc5.png&w=750&q=75 2x"
              src="_next/footer-Illu-righte3ac.png?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-Illu-right.e28d7bc5.png&w=750&q=75"
              width={372}
              height={437}
              decoding="async"
              data-nimg={1}
              className="right"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        {/* <a className="scrollToTop" href="index.html#gotoTop"><i><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z">
                </path>
            </svg></i></a> */}
        {/* <div id="preloader" className="preloader null">
                <div className="animation-preloader">
                    <div className="spinner" />
                    <p className="text-center mt-3">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
    );

};

export default Footer;

