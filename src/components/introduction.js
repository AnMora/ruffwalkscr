import React from "react";

const Introduction = (props) => {
  const Intro = props.data.Intro[0];

  return (
    <>
      <header className="masthead" id="page-top">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                {Intro.Description}
              </h1>
              <hr className="divider light my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h3 className="text-uppercase text-white font-weight-bold">
                {Intro.Presentation}
              </h3>
              <p className="text-white-75 font-weight-light mb-5">
                {Intro.Resume}
              </p>
              <a
                type="button"
                className="btn btn-dark btn-xl js-scroll-trigger"
                href="#nosotros"
              >
                {Intro.MoreInfo}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Introduction;