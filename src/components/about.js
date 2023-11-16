import React from "react";

const About = (props) => {
  const About = props.data.About[0];
  const About_id = props.data.Options[0];

  return (
    <>
      <section className="page-section bg-dark" id={About_id.id}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">{About.Title}</h2>
              <hr className="divider light my-4" />
              <h4 className="text-white mb-2">
               {About.Service}
              </h4>
              <p className="text-white-50 mb-4">
                {About.Information}
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#servicios"
              >
                {About.MoreInfo}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
