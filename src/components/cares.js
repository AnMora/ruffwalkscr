import React from "react";

const Cares = (props) => {
  const Packages = props.data.Packages[0];
  const Cuidos = props.data.Packages[0].Cares;
  const About_id = props.data.Options[2];

  const Care = Cuidos.map((item, position) => {
    return (
      <div key={position} className="col-lg-3 col-sm-12">
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
      <section className="page-section masthead">
        <div className="container text-center">
          <h2 className="text-center text-white mt-0">{Packages.Title2}</h2>
          <hr className="divider my-4" />
          <h4 className="text-white mt-4">{Packages.Subtitle2}</h4>
          <p className=" text-white-50">{Packages.Information2}</p>
          <a
            className="btn btn-dark btn-xl js-scroll-trigger"
            href="#contactenos"
          >
            {Packages.MoreInfo}
          </a>
          <p className="text-white-50 mt-4">{Packages.Warning}</p>
        </div>
      </section>

      <div className="bg-dark text-center" id={About_id.id}>
            <div className="container-fluid p-0">
              <div className="row no-gutters">{Care}</div>
            </div>
          </div>
    </>
  );
};

export default Cares;
