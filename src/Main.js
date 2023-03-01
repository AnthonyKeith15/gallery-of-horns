import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    let beasts = [];
    this.props.data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
          title={beast.title}
          src={beast.image_url}
          alt={beast.keyword}
          description={beast.description}
          key={idx}
        />
      )
    });
    return (
      <main>
        {beasts}
      </main>
      )
  }
}

export default Main;