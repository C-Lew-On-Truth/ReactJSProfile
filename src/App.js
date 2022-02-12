
import React from "react";
import "./App.css";
import "./style/navbar.css";
import clouds from "./media/slow_clouds.mp4";
import NavBar from "./components/NavBar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from './components/ContactMe.jsx';

class App extends React.Component {
       constructor(props) {
               super(props)
               this.state = {
                aboutMe: "About Me",
                experience: "Experience",
                projects: "Projects",
                contactMe: "Contact Me",
                mainContent: <Experience/>
            }   
       }

       content(event) {
               let target = event.target.textContent
               if(target === "About Me") {
                       this.setState({
                               mainContent: <AboutMe/>,
                       })
               } else if (target === "Experience") {
                this.setState({
                        mainContent: <Experience/>
                })
               } else if (target === "Projects") {
                this.setState({
                        mainContent: <Projects/>
                })
               } else if (target === "Contact Me") {
                this.setState({
                        mainContent: <ContactMe/>
                })
               } else {
                       return
               }  
       }

        render() {
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
                                        <video src={clouds} muted autoPlay loop/>

                                        <div className="main-container">
                                             {this.state.mainContent}
                                        </div>

                               </div>
                               
                               
                         </div>
                      
                        );
        }
        
}

export default App;
