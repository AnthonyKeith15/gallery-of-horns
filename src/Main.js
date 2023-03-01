import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast title="Rhino" alt="African Rhino" description="A Large African Rhino" src="BlackRhino.jpeg"/>
        <HornedBeast title="Unicorn" alt="Big Unicorn" description="A Large Rainbow Unicorn" src="Unicorn.png"/>
      </main>
      )
  }
}

export default Main;