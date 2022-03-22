
import React from 'react';
import '../style/experience.css';
import SeenThis from "../media/SeenThis.jpeg"
import NY1 from "../media/ny1.jpg"
import Meredith from "../media/meredith.jpg"
import Adobe from "../media/adobe.jpg"

class Experience extends React.Component {
  constructor(props) {
    super(props)

    this.fadeExpo = React.createRef()
    this.showExpo = this.showExpo.bind(this)
  }
/*
  componentDidMount() {
    this.showExpo()
  }
*/
  showExpo() {
    let expo = this.fadeExpo.current
    setTimeout(() => {
        expo.classList.add("fade-expo")
    }, 1000)
 }

render() {
  return (
    <div className="expo-holder" ref={this.fadeExpo}>
      <h1 className="experience-head">Experience</h1>
   <div className="expo-flex">

   <div className="work">
      <h2 className="business-head">Companies</h2>
      <div className="expo-flex-1">

 
     <div className="companies">
          <img className="icons" src={SeenThis}/>
          <h3>SeenThis</h3>
        </div>
        <div className="companies">
          <img className="icons" src={NY1}/>
          <h3>New York One</h3>
        </div>
        <div className="companies">
          <img className="icons" src={Meredith}/>
          <h3>Meredith</h3>
        </div>
        <div className="companies">
          <img className="icons" src={Adobe}/>
          <h3>Adobe</h3>
        </div>
     
      </div>
    </div>

    <div className="skills">
    <h2 className="skills-head">Skills</h2>
    <div className="expo-flex-2">
       
    </div>
    </div>


   </div>
   <h1 className="resume">Resume</h1>
   </div>
  );
}
}

export default Experience
