import React, {Component, Fragment} from 'react';

class Colors extends Component {
  componentDidMount(){
    document.title = 'Colors Said\'s Portfolie';
  }

  render(){
    return(
      <Fragment>
        <div className="color-background">
        	<div className="color-me">
        		<h1>
        			Study with us DCI-BERLIN
        		</h1>
            <h1>
        		Thanks Itamar for a Great Year :)
            </h1>
        	</div>
        </div>
      </Fragment>
    );
  }
}
export default Colors;
