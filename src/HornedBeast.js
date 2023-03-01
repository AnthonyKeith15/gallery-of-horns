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

  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      src={this.props.src} 
      alt={this.props.alt}
      onClick={this.handleFavorites}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Card.Text>
        ❤️ {this.state.favorites}
        </Card.Text>
      </Card.Body>
    </Card>

      
    );
  }
}

export default HornedBeast