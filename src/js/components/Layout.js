import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

export default class Layout extends React.Component{



  render(){
    // console.log("Layout props", this.props);
    const {location} = this.props;
    return(
      <div>
      {/* passing the props obj location*/}
        <Nav location={location}/>
        {/* rendering layout children */}
        {this.props.children}
        {/* <Footer/> */}
      </div>
    )
  }
}
