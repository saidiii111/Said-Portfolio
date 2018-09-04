import React, {Component, Fragment} from 'react';

class Error extends Component{
  componentDidMount(){
      document.title = 'Error: the Page NOT FOUND';
  }


render(){
  return(
    <Fragment>
      <h2>404 NOT FOUND!</h2>
      <p>Something Going Wrong, Back to Home Page Please :)</p>
    </Fragment>
    );
  }
}

export default Error ;
