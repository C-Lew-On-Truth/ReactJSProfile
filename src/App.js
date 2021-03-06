import React from "react";
import "./App.css";
import "./style/navbar.css";
import clouds from "./media/slow_clouds.mp4";
import NavBar from "./components/NavBar.jsx";
import IntroPage from "./components/IntroPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ContactMe.jsx";
import AboutMeNew from "./components/AboutMeNew.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: "About Me",
      experience: "Experience",
      projects: "Projects",
      contactMe: "Contact Me",
      mainContent: <ContactMe />,
      contentHead: "Contact Me",
      contentChanged: false,
      menuClicked: false,
    };
    this.fades = React.createRef();
    this.nameFades = React.createRef();
    this.navShow = React.createRef();
    //this.changing = this.changing.bind(this)
  }

  fadin(event) {
    let fader = this.fades.current;
  }

  navShow(event) {}

  content(event) {
    const target = event.target;

    let colorOptions = event.currentTarget;

    switch (target.textContent) {
      case "About Me":
        this.setState({
          mainContent: <AboutMeNew />,
          contentHead: "About Me",
        });
        break;
      case "Experience":
        this.setState({
          mainContent: <Experience />,
          contentHead: "Experience",
        });
        break;
      case "Projects":
        this.setState({
          mainContent: <Projects />,
          contentHead: "Projects",
        });
        break;
      case "Contact Me":
        this.setState({
          mainContent: <ContactMe />,
          contentHead: "Contact Me",
        });
        break;
    }
  }

  render() {
    //console.log(window.innerWidth);
    return (
      <div>
        <div className="main">
          <NavBar
            goAboutMe={this.state.aboutMe}
            goExperience={this.state.experience}
            goProjects={this.state.projects}
            goContactMe={this.state.contactMe}
            onChildClick={this.content.bind(this)}
          />
          <video src={clouds} muted autoPlay loop />

          <div className="main-container" ref={this.fades}>
            <h1 className="content-head" ref={this.nameFades}>
              {this.state.contentHead}
            </h1>
            {this.state.mainContent}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
