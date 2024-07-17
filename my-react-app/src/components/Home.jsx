import React from 'react';
import myPicture from '../assets/mypicture.png';

const Home = () => {
  return ( 
    <>
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            {/* Header text content */}
            <div className="text-center text-xxl-start">
              <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div className="text-uppercase">Design &middot; Development &middot; Marketing</div>
              </div>
              <div className="fs-3 fw-light text-muted">I can help your business to</div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">Get online and grow fast</span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Resume</a>
                <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Projects</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-7">
            {/* Header profile picture */}
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
              <img className="profile-img" src={myPicture} alt="Profile" />
                {/* SVG Dots */}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 191.6 1215.4"
                  className="dots-2"
                >
                  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">              
                   </g>
                </svg>
                {/* END of SVG Dots */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                <p className="lead fw-light mb-4">My name is Start Bootstrap and I help brands grow.</p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                  <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                  <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
            <div className="col-auto">
              <a className="small" href="#!">Privacy</a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">Terms</a>
              <span className="mx-1">&middot;</span>
              <a className="small" href="#!">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> */}
    </>
  );
}

export default Home;
