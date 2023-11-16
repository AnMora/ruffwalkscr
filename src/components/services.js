import React from "react";

const Services = (props) => {
  const Services = props.data.Services[0];
  const Servicios = props.data.Services[0].Take;
  const About_id = props.data.Options[1];

  const Service = Servicios.map((item, position) => {
    return (
      <div key={position} className="col-lg-3 col-md-6 text-center">
        <div className="mt-5">
          <i className={item.icon}></i>
          <h3 className="h4 text-white mb-2">{item.Title}</h3>
          <p className="text-white mb-0">{item.Description}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="page-section masthead" id={About_id.id}>
        <div className="container">
          <h2 className="text-center text-white mt-0">{Services.Title}</h2>
          <hr className="divider my-4" />
          <div className="row">
            {Service}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
