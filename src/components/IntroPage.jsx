
import React from "react";
import dove from "../media/dove.gif"
import "../style/intro-page.css";

let image = {
    test:dove
}

class IntroPage extends React.Component {
   constructor() {
       super()
       this.state = {
           dovesAppear: false
       }
      this.image = React.createRef()
       this.showDoves = this.showDoves.bind(this)
   }


  
 
    showDoves() {
        let imageGif = this.image.current
        setTimeout(() => {
            imageGif.classList.add("showDoves")
        }, 1000)
        setTimeout(() => {
            imageGif.classList.add("dovesFade")
        }, 5000)
    }

    componentDidMount() {
        this.showDoves()
      }


        render() {
         
            return(
                <div className="dove-style">
                    <div className="dove" ref={this.image}>
                        <img src={dove}/>
                    </div>
                </div>
            )
        }
}

export default IntroPage;
