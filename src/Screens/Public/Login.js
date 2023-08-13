import React from "react";
import { Link } from "react-router-dom";

export default class Translation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="sign-in-up login">
          <div className="overlay  pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-content">
                    <div className="section-header">
                      <h2 className="title">Login</h2>
                      <p>
                        Your security is our top priority. You'll need this to
                        log into your KSA FutureBank account
                      </p>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-12">
                          <div className="single-input">
                            <label htmlFor="email">Enter Your Email ID</label>
                            <input
                              type="email"
                              id="email"
                              placeholder="Your email ID here"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="single-input ">
                            <label htmlFor="confirmPass">
                              Confirm Password
                            </label>
                            <div className="password-show d-flex align-items-center">
                              <input
                                type="password"
                                className="passInput"
                                id="confirmPass"
                                placeholder="Enter Your Password"
                                required
                              />
                            </div>
                            <div className="forgot-area text-end">
                              <a className="forgot-password" href="/#">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-area">
                        <button className="cmn-btn">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
