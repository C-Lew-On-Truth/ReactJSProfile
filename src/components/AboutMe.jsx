import React from "react";
import "../style/about-me.css";
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

class AboutMe extends React.Component {
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
      about.classList.add("fade-about");
    }, 1000);
  }

  mainGif() {
    this.setState({ gif: muppet });
  }

  imageChange(event) {
    let target = event.target.textContent;

    switch (target) {
      case "Hockey":
        this.setState({ gif: hockey });
        break;
      case "Cooking":
        this.setState({ gif: cooking });
        break;
      case "Music":
        this.setState({ gif: music });
        break;
      case "Skateboarding":
        this.setState({ gif: skate });
        break;
      case "Coaching":
        this.setState({ gif: coaching });
        break;
      case "Good Company":
        this.setState({ gif: company });
        break;
      case "Basketball":
        this.setState({ gif: basketball });
        break;
      case "Coding":
        this.setState({ gif: coding });
        break;
      case "Family":
        this.setState({ gif: family });
        break;
      case "Peace and Love":
        this.setState({ gif: peace });
        break;
    }
  }

  render() {
    return (
      <div className="about-me-holder" ref={this.aboutFade}>
        <div className="entry-holder">
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

          <div className="interest-holder">
            <h1 className="h-and-i">Hobbies and Interest</h1>
            <div className="interest-inner">
            <div className="gif-holder">
                 <img className="gif" src={this.state.gif} />
               </div>
              
              
              <div className="interest" 
              onMouseOver={this.imageChange}
              onMouseLeave={this.mainGif}
              >
                 <h4>Coaching</h4>
                 <h4>Hockey</h4>
                 <h4>Cooking</h4>
                 <h4>Skateboarding</h4>
                 <h4>Music</h4>
                 <h4>Good Company</h4>
                 <h4>Coding</h4>
                 <h4>Basketball</h4>
                 <h4>Family</h4>
                 <h4>Peace and Love</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
