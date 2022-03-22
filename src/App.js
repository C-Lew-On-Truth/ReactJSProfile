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
      mainContent: <IntroPage />,
      contentChanged: false,
      menuClicked: false,
    };
    this.fades = React.createRef();
    this.changing = this.changing.bind(this)
  }

changing() {
       
}

componentDidMount() {
           this.changing()
}


  content(event) {
          let fade = this.fades.current;
          this.changing()
          this.setState({menuClicked: true,})
          console.log(fade)
          
    let target = event.target.textContent;
   
    if (target === "About Me" && this.state.menuClicked) {
      this.setState({
        mainContent: <AboutMe />,
      });
      console.log('about clicked')
    } else if (target === "Experience") {
      this.setState({
        mainContent: <Experience />,
      });
    } else if (target === "Projects") {
      this.setState({
        mainContent: <Projects />,
      });
    } else if (target === "Contact Me") {
      this.setState({
        mainContent: <ContactMe />,
      });
    } else {
      return;
    }
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

          <div className="main-container" ref={this.fades}>
            {this.state.mainContent}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
