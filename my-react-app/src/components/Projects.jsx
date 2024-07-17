import React from 'react';

const Projects = () => {
  return (
    <>
       {/* <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Modern Business - Start Bootstrap Template</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head> */}
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Project Card 1*/}
              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Project Name 1</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                    </div>
                    <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                  </div>
                </div>
              </div>
              {/* Project Card 2*/}
              <div className="card overflow-hidden shadow rounded-4 border-0">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">Project Name 2</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                    </div>
                    <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
          </div>
        </div>
      </section>
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
            <div className="col-auto">
              <a className="small" >Privacy</a>
              <span className="mx-1">&middot;</span>
              <a className="small" >Terms</a>
              <span className="mx-1">&middot;</span>
              <a className="small" >Contact</a>
            </div>
          </div>
        </div>
      </footer> 
      {/* <h1>projects</h1> */}
    </>
  );
};

export default Projects;
