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
        		<h2>
        			study with us
        		</h2>
            <h1>
        		DCI-BERLIN
            </h1>
        	</div>
        </div>
      </Fragment>
    );
  }
}
export default Colors;
