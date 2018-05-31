import React from 'react'

class NewEventControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  this.handleClick = this.handleClick.bind(this); //still not sure i 100% get this
  }

  handleClick(){
    console.log(this);
    this.setState({formVisibleOnPage:true});
    console.log("form state: " + this.state.formVisibleOnPage);
  }

  render(){
    return(
      <div>
        <p>This is the NewEventControl component!<strong onClick={this.handleClick}>toggle</strong></p>
      </div>
    )
  }

}

export default NewEventControl;
