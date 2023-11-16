import React from "react";

const Packages = (props) => {
  const Packages = props.data.Packages[0];
  const Paseos = props.data.Packages[0].Walks;
  const About_id = props.data.Options[2];

  const Walk = Paseos.map((item, position) => {
    return (
      <div key={position} className="col-lg-4 col-sm-12">
        <a className="portfolio-box" href={item.Image}>
          <img className="img-fluid" src={item.Image} alt="..." />
          <div className="portfolio-box-caption">
            <div className="project-category text-white">
              {item.Benefits}
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <>
      <section className="page-section bg-dark" id={About_id.id}>
        <div className="container text-center">
          <h2 className="mb-4 text-white">{Packages.Title1}</h2>
          <hr className="divider light my-4" />
          <h4 className="text-white">{Packages.Subtitle1}</h4>
          <p className="text-white-50">{Packages.Information1}</p>

          <a
            className="btn btn-light btn-xl js-scroll-trigger"
            href="#contactenos"
          >
            {Packages.MoreInfo}
          </a>
        </div>
      </section>

      <div className="bg-dark text-center" id={About_id.id}>
            <div className="container-fluid p-0">
              <div className="row no-gutters">{Walk}</div>
            </div>
          </div>
    </>
  );
};

export default Packages;
