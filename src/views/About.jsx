import React, {Component, Fragment} from 'react';

import bewer from '../img/bewer.jpg';
import beachCloud from '../img/beachCloud.jpg';

class About extends Component{
  componentDidMount(){
    document.title = 'About Said\'s Portfolie';
  }
  render(){
    return(
  <Fragment>
      <main className="ml-3">
        <div className="box">
          <img className="img-responsive" src={beachCloud} alt="beachCloud" />
           <div className="img-title">
    <section>
       <h1>My Résumé</h1>
       <dt> Name</dt>
       <dd className="lead">Said SAGHIR</dd>
       <img className="d-inline  rounded-circle" src={bewer} alt="Said" width="150" height="200" />
     </section>
     <section>
       <h2>27/11/2017, DCI Berlin</h2>
       <div>
         <p className="lead">2001–2003 Cisco Networks, <br/>Damaskus 06/2001, Graduated with high school diploma</p>
       </div>
     </section>
     <section>
        <h2> IT Skills:</h2>
        <h1 className="lead"> React, Redux, Cisco Networks, MS Office, HTML5, CSS3, Sass, Scss, JAVA-SCRIPT</h1>
     </section>
     <section>
       <h2>  Languages:</h2>
       <dt>Arabic:</dt>
       <dd>Nativ-language</dd>
       <dt>German:</dt>
       <dd>Good</dd>
       <dt> Norwigen: </dt>
       <dd>Good</dd>
       <dt> Greek:</dt>
       <dd> Good</dd>
       <dt>English</dt>
       <dd>Good</dd>
       <h4> Berlin, 03.09.2018 Said Saghir</h4>
     </section>
   </div>
   </div>
   </main>
 </Fragment>
   );
  }
}

export default About;
