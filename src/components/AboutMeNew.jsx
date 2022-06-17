import React from "react";
import "../style/about-meNew.css";
import muppet from "../media/muppet.gif";
import hockey from "../media/hockey-giphy.gif";
import cooking from "../media/kel-cooking.gif";
import music from "../media/jimi-music.gif";
import skate from "../media/skate-gif.gif";
import coaching from "../media/hockey.gif";
import company from "../media/good-company.gif";
import basketball from "../media/dribbling.gif";
import coding from "../media/coding.gif";
import family from "../media/family.gif";
import peace from "../media/peace.gif";


class AboutMeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: muppet,
    };
    this.imageChange = this.imageChange.bind(this);
    this.mainGif = this.mainGif.bind(this);
    this.aboutFade = React.createRef();
    this.showAbout = this.showAbout.bind(this);
  }

  showAbout() {
    let about = this.aboutFade.current;
    setTimeout(() => {
      about.style.opacity = "1"
    }, 1000);
  }

  mainGif() {
    this.setState({ gif: muppet });
  }

  imageChange(event) {
    let target = event.target.textContent;
  }

  render() {
    return (
      <div className="about-me-holder" ref={this.aboutFade}>
        
          <div className="bio">
            <p>
              My name is Clayton Lewis and I'm a Media Technologist based out of
              Queens, New York. I've always considered myself to be an active
              indvidual with many interest that are truly eclectic. I was born
              in Upland, California, but have been blessed and fortunate to
              visit and reside in many locations within North America. I'm
              throughly "down to earth" and because of all these living
              experiences, I have groomed myself to become a well rounded
              specimen. My work ethic is relentless, but I love to have a good
              time! In 2015, I packed my bags and hopped on a train to New York
              City to seek a position in the media industry! Fast forward 6
              years later, I now have established myself as a true media
              professional in transition to starting a career in Software
              Development and Informational Technology! I thank you for taking
              the time to read my entry and hope you enjoy my work because this
              web page has been conducted from scratch by yours truly.
            </p>
          

        
         
       
        </div>
      </div>
    );
  }
}

export default AboutMeNew;
