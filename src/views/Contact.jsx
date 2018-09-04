import React, {Component, Fragment} from 'react';

class Contact extends Component{
  componentDidMount(){
    document.title = 'Contact Said\'s Portfolie';
  }
  render(){
    return(
      <Fragment>
        <p>Send me at <a href="alsaghir.said@gmail.com">my email</a></p>
      </Fragment>
    );
  }
}

export default Contact;
