import React from 'react';

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container px-5 mb-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form id="contactForm">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    required
                  />
                  <label htmlFor="name">Full name</label>
                  <div className="invalid-feedback">A name is required.</div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback">An email is required.</div>
                  <div className="invalid-feedback">Email is not valid.</div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    required
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div className="invalid-feedback">A phone number is required.</div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: '10rem' }}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback">A message is required.</div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                  </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <h1>contant</h1>
  );
};

export default Contact;
