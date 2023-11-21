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
            </div>

            <div className="row align-items-center no-gutters mt-1 mb-1 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0"
                  src="https://imagenes.lainformacion.com/files/image_656_370/uploads/imagenes/2022/10/18/el-joven-paseador-de-perros-que-llega-a-ganar-mas-de-122-000-euros-al-ano.jpeg"
                  alt=""
                />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left text-white">
                  <h4 className="text-white">{About.Whoweam}</h4>
                  <p className="text-white mb-0">
                    {About.Explain}
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h4 className="text-white mb-2">{About.Service}</h4>
                <p className="text-white-50 mb-4">{About.Information}</p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#servicios"
                >
                  {About.MoreInfo}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
