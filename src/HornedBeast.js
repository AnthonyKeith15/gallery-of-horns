import React from "react";
import Card from 'react-bootstrap/Card'
import './HornedBeast.css'

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favorites: 0
    };
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    })
  }

  handleImgClick = () => {
    this.props.handleOpenModal(this.props.src, this.props.title, this.props.alt);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"
      src={this.props.src} 
      alt={this.props.alt}
      onClick={this.handleImgClick}
      />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Card.Text onClick={this.handleFavorites}>
        ❤️ {this.state.favorites}
        </Card.Text>
      </Card.Body>
    </Card>

      
    );
  }
}

export default HornedBeast