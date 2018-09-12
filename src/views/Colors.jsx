import React, {Component, Fragment} from 'react';

class Colors extends Component {
  componentDidMount(){
    document.title = 'Home Said\'s Portfolie';
  }

  render(){
    return(
      <Fragment>
        <div class="color-background">
        	<div class="color-me">
        		<p>
        			study with us
        		</p>
        		DCI-BERLIN
        	</div>
        </div>
      </Fragment>
    );
  }
}
export default Colors;
