import React from "react";
import "../style/experience.css";
import SeenThis from "../media/SeenThis.jpeg";
import NY1 from "../media/ny1.jpg";
import Meredith from "../media/meredith.jpg";
import Adobe from "../media/adobe.jpg";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.fadeExpo = React.createRef();
    this.showExpo = this.showExpo.bind(this);
  }
  /*
  componentDidMount() {
    this.showExpo()
  }
*/
  showExpo() {
    let expo = this.fadeExpo.current;
    setTimeout(() => {
      expo.classList.add("fade-expo");
    }, 1000);
  }

  render() {
    return (
      <div className="expo-holder">

        <div className="expo-flex">
          <div className="work">

          <h2 className="business-head">Companies</h2>

            <div className="expo-flex-1">
            
              <div className="companies">
                <img className="icons" src={SeenThis} />
                <h3>SeenThis</h3>
                <h4>Technical Producer</h4>
              </div>

              <div className="companies">
                <img className="icons" src={NY1} />
                <h3>Spectrum News NY1</h3>
                <h4>Media Ingest Operator</h4>
              </div>

              <div className="companies">
                <img className="icons" src={Meredith} />
                <h3>Meredith</h3>
                <h4>Video Ingest Technician</h4>
              </div>

              <div className="companies">
                <img className="icons" src={Adobe} />
                <h3>Adobe Stock Media</h3>
                <h4>Media Operations Coordinator</h4>
              </div>
      

            </div>
            <h2 className="resume">Resume</h2>
          </div>

          <div className="skills">
            <h2 className="skills-head">Skills</h2>
            <div className="expo-flex-2"></div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Experience;
