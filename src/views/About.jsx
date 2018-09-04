import React, {Component, Fragment} from 'react';

import bewer from '../images/bewer.jpg';

class About extends Component{
  componentDidMount(){
    document.title = 'About Said\'s Portfolie';
  }
  render(){
    return(
  <Fragment>
      <main >
    <section>
       <h1>My Résumé:</h1>
       <dt> Name:</dt>
       <dd className="lead">Said SAGHIR</dd>
       <img className="d-inline  rounded-circle" src={bewer} alt="Said" width="150" height="200" />
     </section>
     <section>
       <h2>27/11/2017, DCI Berlin</h2>
       <div>
         <p className="lead">11/2001 – 12/2003 Course in Networks field, UNRWA Projekt, Damaskus 06/2001, Graduated from high school with a high school diploma</p>
       </div>
     </section>
     <section>
       <h2>  Languages:</h2>
       <dt>Arabic:</dt>
       <dd>Mother-language</dd>
       <dt>German:</dt>
       <dd>Good</dd>
       <dt> Norwigen: </dt>
       <dd>Good</dd>
       <dt> Greek:</dt>
       <dd> Good</dd>
       <dt>English</dt>
       <dd>Good</dd>
       <h2> IT Skills:</h2>
       <p className="lead"> React, Redux, Cisco Networks, MS Office, HTML5, CSS3, Sass, Scss, JAVA-SCRIPT</p>
       <p>Hobbies: Swimming, Reading, Natur Berlin, 03.09.2018 Said Saghir</p>
     </section>
   </main>
 </Fragment>
   );
  }
}

export default About;
