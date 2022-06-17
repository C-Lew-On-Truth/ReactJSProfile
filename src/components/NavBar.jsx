
import React from "react";
import "../style/navbar.css"

class NavBar extends React.Component {
constructor() {
    super()
    this.colorLinks = React.createRef()
}
    showMeNav() {
        let linkColor = this.colorLinks.current
        console.log(linkColor)
    }


   render(props) {
       
       
    return(
        <div className="nav-bar" onClick={this.props.onChildClick} ref={this.colorLinks} >
            <a className="links">
                {this.props.goAboutMe}
            </a>
            <a className="links">
                {this.props.goExperience}
            </a>
            <a className="links">
                {this.props.goProjects}
            </a>
            <a className="links">
                {this.props.goContactMe}
            </a>
        </div>
       )
   }
}

export default NavBar