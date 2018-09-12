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
        <div className="row">
          <div className="col-sm">
            <img className="img-responsive" src={beach} alt="beach" width="100%" height="150%" />
             <div className="img-title">
               <div className="ml-0">
               <h1 className="display-4">Hello, I'm Said!</h1>
                <h2>Front-End  DEV | Open-Sources Enthusiast </h2>
                <h3>MY IT SKILLS</h3>
                <dt>Java Skript</dt>
                <dd>CSS3</dd>
                <dt>React</dt>
                <dd>and more...</dd>
             </div>
             </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
