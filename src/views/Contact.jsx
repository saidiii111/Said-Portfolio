import React, {Component, Fragment} from 'react';

import contact from '../img/contact.jpg';

class Contact extends Component{
  componentDidMount(){
    document.title = 'Contact Said\'s Portfolie';
  }
  render(){
    return(
      <Fragment>

      <form action="https://formspree.io/alsaghir.said@gmail.com"
            method="POST" id="contactMe" className="text-center mt-5">
       <h1 className="separa-20 fontsize-50 colorblanco">Contact me</h1>

        <div className="row margin-0">
         <div className="col-xs-3 col-lg-3 col-md-3"></div>

        <div className="col-xs-6 col-md-6 col-lg-6 margin-0">
        <label>Name :  </label>
          <input type="text" name="Name" placeholder=" type your name"/>
          <div className="well"></div>
          <label>Email : </label>
          <input type="text" name="Name" placeholder=" type your E-mail"/>
          <div className="well"></div>
          <textarea name="message" rows="8" cols="55" placeholder="type your messege"></textarea>
          <button className="btn btn-primary mb-5 btn-block">Send</button>
        </div>
      </div>
      <h2 className="margin-0 lead"  ><i><b>I promise to answer in less than 48 hours</b></i></h2>

      <img className="" src={contact}  alt="keyboard" width="900" height="500"/>

    </form>

      </Fragment>
    );
  }
}

export default Contact;
