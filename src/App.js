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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: "About Me",
      experience: "Experience",
      projects: "Projects",
      contactMe: "Contact Me",
      mainContent: <AboutMe />,
      contentHead: "About Me",
      contentChanged: false,
      menuClicked: false,
    };
    this.fades = React.createRef();
    //this.changing = this.changing.bind(this)
  }





  content(event) {
          
    let target = event.target.textContent;
   
    if (target === "About Me") {
      this.setState({
        mainContent: <AboutMe />,
        contentHead: "About Me"
      });
      console.log('about clicked')
    } else if (target === "Experience") {
      this.setState({
        mainContent: <Experience />,
        contentHead: "Experience"
      });
    } else if (target === "Projects") {
      this.setState({
        mainContent: <Projects />,
        contentHead: "Projects"
      });
    } else if (target === "Contact Me") {
      this.setState({
        mainContent: <ContactMe />,
        contentHead: "Contact Me"
      });
    } else {
      return;
    }
    console.log(target)
  }

  render() {
    console.log(window.innerWidth);
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

          <div className="main-container">
            <h1 className="content-head">{this.state.contentHead}</h1>
            {this.state.mainContent}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
