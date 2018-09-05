import React, {Component, Fragment} from 'react';

import earth from '../images/earth.jpg';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home Said\'s Portfolie';
  }

  render(){
    return(
      <Fragment>
         <img className="img-fluid" src={earth} alt="the-Earth" />
      </Fragment>
    );
  }
}

export default Home;
