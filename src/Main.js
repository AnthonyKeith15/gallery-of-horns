import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, idx) => {
      return (
      <HornedBeast
        title={beast.title}
        src={beast.image_url}
        alt={beast.keyword}
        description={beast.description}
        key={idx}
        handleOpenModal={this.props.handleOpenModal}
      />
      )
    })

  return(
      <main>
  { beasts }
      </main >
      )
  };
}

export default Main;