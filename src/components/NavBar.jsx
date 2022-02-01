
import React from "react";
import "../style/navbar.css"

class NavBar extends React.Component {

   render(props) {
    return(
        <div className="nav-bar" onClick={this.props.onChildClick}>
            <div className="links">
                {this.props.goAboutMe}
            </div>
            <div className="links">
                {this.props.goExperience}
            </div>
            <div className="links">
                {this.props.goProjects}
            </div>
            <div className="links">
                {this.props.goContactMe}
            </div>
        </div>
       )
   }
}

export default NavBar