import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast title="Rhino" alt="African Rhino" description="A Large African Rhino" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffiles.worldwildlife.org%2Fwwfcmsprod%2Fimages%2FBlack_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg%2Fhero_small%2F5wj13dkb6y_Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg&imgrefurl=https%3A%2F%2Fwww.worldwildlife.org%2Fspecies%2Fblack-rhino&tbnid=J135LZoT232eHM&vet=12ahUKEwjFsZKSqbf9AhUFI30KHTzSBqkQMygAegUIARDhAQ..i&docid=wXoLWjxzwdQ2hM&w=640&h=480&q=black%20rhino&ved=2ahUKEwjFsZKSqbf9AhUFI30KHTzSBqkQMygAegUIARDhAQ"/>
        <HornedBeast title="Unicorn" alt="Big Unicorn" description="A Large Rainbow Unicorn" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Funicorn%2F&psig=AOvVaw1gnKgizltNBWll0R4njbyS&ust=1677642900156000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjr5_qot_0CFQAAAAAdAAAAABAF"/>
      </main>
      )
  }
}

export default Main;