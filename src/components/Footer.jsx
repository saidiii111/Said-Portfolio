import React from 'react';

const Footer = (props) => (
  <footer className="text-right fixed-bottom mb-2">
      <div className="container">
        <div className="row">
          <h2 className=" col mt-3"><span className="text-primary">&copy; 2018-ALSAGHIR-SAID</span> </h2>
          <nav className="col mt-3">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-square fa-3x"></i></a>
            <a href="https://github.com/saidiii111"><i className="fab fa-github-square fa-3x ml-3"></i></a>
          </nav>
        </div>
      </div>
    </footer>
);

export default Footer;
