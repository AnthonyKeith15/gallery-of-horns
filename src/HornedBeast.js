import React from "react";

class HornedBeast extends React.Component{
  render() {
    return (
      <>
      <img src={this.props.src} alt={this.props.alt}></img>
      <h2>{this.props.title}</h2>
      <h4>{this.props.alt}</h4>
      <p>{this.props.description}</p>
      </>
      
    )
  }
}

export default HornedBeast