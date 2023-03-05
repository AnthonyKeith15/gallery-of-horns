import React from "react";
import HornedBeast from "./HornedBeast";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortingFilter: 'all',
      sortedData: this.props.data,
    }
  }

  handleSortingFilter = (event) => {
    this.setState({
      sortingFilter: event.target.value,
    })
  }

  handleFilterData = (event) => {
    event.preventDefault();
    let filteredData = this.props.data.filter((beast) => {
      if(this.state.sortingFilter === 'all'){
        return beast
      } else if(this.state.sortingFilter === beast.horns.toString()){
        return beast
      }
    })
    this.setState({
      sortedData: filteredData
    })
  }
  
  
  render() {
    // beasts is the array of cards elements going to be rendered
    let beasts = this.state.sortedData.map((beast) => {
      return (
        <>
        <HornedBeast
          title={beast.title}
          src={beast.image_url}
          alt={beast.keyword}
          description={beast.description}
          key={beast._id}
          handleOpenModal={this.props.handleOpenModal}
          />
          </>
      )
    })



  return(
    <>
      <Form onSubmit={this.handleFilterData}>
      <Form.Select onChange={this.handleSortingFilter}>
        <option value="all">All Horned Beasts</option>
        <option value="1">1 Horn</option>
        <option value="2">2 Horns</option>
        <option value="3">3 Horns</option>
        <option value="100">A Ton Of Horns!</option>
      </Form.Select>
      <Button type="submit" >
        Horntastic!
      </Button>
        </Form>
      <main>
          {beasts}
      </main >
    </>
      )
  };
}

export default Main;