import React, { Component } from "react";
import "bootstrap/js/dist/collapse.js";
import $ from "jquery";
window.jQuery = $;

class Nav extends Component {
  componentDidMount() {
    var navbarCollapse = () => {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-scrolled");
      }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
  }

  render() {
    var handleMenu = (e) => {
      $(".navbar-collapse").removeClass("show");
    };

    // const { navCollapsed } = this.state;

    const Intro = this.props.data.Intro[0];

    const Options = this.props.data.Options.map((item, position) => {
      return (
        <li className="nav-item">
          <a
            key={position}
            className="nav-link js-scroll-trigger"
            href={item.hash}
            onClick={(e) => handleMenu(e)}
          >
            {item.option}
          </a>
        </li>
      );
    });

    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              {Intro.Name}
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">{Options}</ul>
            </div>
          </div>
        </nav>

        <div className="column-style-top"></div>
        <div className="column-style-bottom"></div>
      </>
    );
  }
}

export default Nav;
