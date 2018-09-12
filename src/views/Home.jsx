import React, {Component, Fragment} from 'react';

import beach from '../img/beach.jpg';
// import beachCloud from '../img/beachCloud.jpg';
// import clouds from '../img/clouds.jpg';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home Said\'s Portfolie';
  }



  render(){
    return(
      <Fragment>
        <div className="box">
          <img className="img-responsive" src={beach} alt="beach" />
           <div className="img-title">
             <h1 className="display-4">Hello, I'm Said!</h1>
              <h4>Front-End  DEV | Open-Sources Enthusiast </h4>
           </div>
        </div>

      </Fragment>
    );
  }
}
export default Home;
