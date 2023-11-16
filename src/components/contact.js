import React from 'react'

const Contact = (props) => {
    // const About = props.data.Intro[0];
//   const About_id = props.data.Options[0];

  return (
    <>
        <section className="page-section bg-dark" id="contactenos">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0 text-white">¡Pongámonos en contacto!</h2>
                        <hr className="divider my-4" />
                        <p className="text-white-50 mb-5">
                            ¡Escribenos y consulte por el servicio de su interes!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+506 8888-9999</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
                        <a className="d-block" href="mailto:contact@yourwebsite.com">ruffwalkscr@gmail.com</a>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
                        <a className="d-block" href="mailto:contact@yourwebsite.com">ruffwalkscr@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="bg-light py-5">
            <div className="container">
                <div className="small text-center text-muted">
                    Copyright &copy;
                    {/* This script automatically adds the current year to your website footer
                    (credit: https://updateyourfooter.com/) */}
                    <script>
                        document.write(new Date().getFullYear());
                    </script>
                    - Company Name
                </div>
            </div>
        </footer>
    </>
  )
}

export default Contact