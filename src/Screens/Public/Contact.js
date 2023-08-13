import React from "react";
import CmsContent from "../../bridge/CmsContent";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      message: "",
      isSubmit: false,
      isToast: false,
    };
  }

  SubmitContact = async () => {
    let { firstname, lastname, email, mobile, message } = this.state;
    await this.setState({ isSubmit: true });

    let category = {};
    category.firstname = firstname;
    category.lastname = lastname;
    category.email = email;
    category.mobile = mobile;
    category.message = message;
    category.type = 1;
    if (category.email) {
      await localStorage.setItem("Data", JSON.stringify(category));
    }
    if (category) {
      await this.setState({ isSubmit: false, isToast: true });
      setTimeout(() => {
        this.ClearContact();
      }, 5000);
    }
  };
  ClearContact = async () => {
    await this.setState({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      message: "",
      isSubmit: false,
      isToast: false,
    });
  };

  render() {
    let { firstname, lastname, email, mobile, message, isSubmit, isToast } =
      this.state;
    return (
      <>
        <div>
          <br />

          <section className="account-feature loan-feature need-more-help">
            <div className="overlay pt-120 pb-120">
              <div className="container">
                <div className="row ">
                  <div className="col-md-4">
                    <div className="">
                      <h5>Locations</h5>
                      <p style={{ fontSize: "12px" }}>
                        1702 & 1706, Mazaya Business Avenue BB2, Jumeirah Lakes
                        Towers, Dubai, UAE
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <h5>Mail Address</h5>
                      <p style={{ fontSize: "12px" }}>
                        info@verve-management.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <h5>Contact No</h5>
                      <p style={{ fontSize: "12px" }}>+971 4 243 4677</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231112.19969403924!2d55.06560543222671!3d25.165151420589055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d63f552571b%3A0xdb1dc5440bf3a91b!2sVerve%20Management%20DMCC!5e0!3m2!1sen!2sae!4v1691160837320!5m2!1sen!2sae"
              width={600}
              height={250}
              className="Map_Contact"
              title="Map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>

          <div className="container">
            <div className="typology-section">
              <br />
              <div className="contact__wrapper m-4">
                <div className="row no-gutters">
                  <div className="col-sm-2" />
                  <div className="col-lg-8 contact-form__wrapper">
                    <h3 className="text-center color--white mb-2">
                      Get in Touch
                    </h3>
                    {/* <form className="contact-form p-5 " > */}
                    <div className="contact-form p-5">
                      {isToast && (
                        <>
                          <div
                            className="toast align-items-center text-black show"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                          >
                            <div className="d-flex">
                              <div className="toast-body">
                                <i
                                  class="fa-regular fa-circle-check"
                                  style={{ color: "black" }}
                                ></i>{" "}
                                &nbsp; Your Request is Submitted Successfully..
                              </div>
                              <button
                                type="button"
                                className="btn-close btn-close-black me-2 m-auto"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                              />
                            </div>
                          </div>
                          <br />
                          <br />
                        </>
                      )}
                      <div className="row">
                        <div className="col-sm-6 mb-3">
                          <label
                            htmlFor="validationServer01"
                            className="form-label"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              isSubmit === true && firstname === ""
                                ? "is-invalid"
                                : ""
                            }`}
                            id="validationServer01"
                            value={firstname}
                            onChange={(e) => {
                              this.setState({ firstname: e.target.value });
                            }}
                          />
                          {isSubmit === true && firstname === "" && (
                            <div className="invalid-feedback">
                              Please Enter First Name!
                            </div>
                          )}
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label
                            htmlFor="validationServer02"
                            className="form-label"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              isSubmit === true && lastname === ""
                                ? "is-invalid"
                                : ""
                            }`}
                            id="validationServer02"
                            value={lastname}
                            onChange={(e) => {
                              this.setState({ lastname: e.target.value });
                            }}
                          />
                          {isSubmit === true && lastname === "" && (
                            <div className="invalid-feedback">
                              Please Enter Last Name!
                            </div>
                          )}
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label
                            htmlFor="validationServer03"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              isSubmit === true && email === ""
                                ? "is-invalid"
                                : ""
                            }`}
                            id="validationServer03"
                            value={email}
                            onChange={(e) => {
                              this.setState({ email: e.target.value });
                            }}
                          />
                          {isSubmit === true && email === "" && (
                            <div className="invalid-feedback">
                              Please Enter Email!
                            </div>
                          )}
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label
                            htmlFor="validationServer04"
                            className="form-label"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${
                              isSubmit === true && mobile === ""
                                ? "is-invalid"
                                : ""
                            }`}
                            id="validationServer04"
                            value={mobile}
                            onChange={(e) => {
                              this.setState({ mobile: e.target.value });
                            }}
                          />
                          {isSubmit === true && mobile === "" && (
                            <div className="invalid-feedback">
                              Please Enter Phone Number!
                            </div>
                          )}
                        </div>
                        <div className="col-sm-12 mb-3">
                          <label
                            htmlFor="validationServer05"
                            className="form-label"
                          >
                            How can we help?
                          </label>
                          <textarea
                            className={`form-control ${
                              isSubmit === true && message === ""
                                ? "is-invalid"
                                : ""
                            }`}
                            id="validationServer05"
                            rows={4}
                            value={message}
                            onChange={(e) => {
                              this.setState({ message: e.target.value });
                            }}
                          />
                          {isSubmit === true && message === "" && (
                            <div className="invalid-feedback">
                              Please Enter Message!
                            </div>
                          )}
                        </div>
                        <div className="col-sm-12 mb-3">
                          <div className="d-flex justify-content-start">
                            <a
                              className="cmn-btn"
                              onClick={() => {
                                this.SubmitContact();
                              }}
                            >
                              Submit
                            </a>
                            {/* <button
                                                            className="sitebuttonbgoutline" onClick={() => { this.SubmitContact() }}>Submit</button> */}
                            &nbsp; &nbsp;
                            <a
                              className="cmn-btn1"
                              onClick={() => {
                                this.ClearContact();
                              }}
                            >
                              clear
                            </a>
                            {/* <button
                                                            className="sitebuttonoutline" onClick={() => { this.ClearContact() }}>clear</button> */}
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2" />
                  {/* End Contact Form Wrapper */}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}
