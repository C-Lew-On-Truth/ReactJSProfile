
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
       this.showElement = this.showElement.bind(this)
   }

    showElement() {
        let imageGif = this.image.current
        setTimeout(() => {
            console.log(imageGif)
            imageGif.classList.add("showDoves")
        }, 2000)
        setTimeout(() => {
            
            console.log(imageGif)
        }, 4000)
    }
  
        render() {
         
            return(
                <div className="dove-style">
                    <div className="dove" ref={this.image} onLoad={this.showElement}>
                        <img src={dove}/>
                    </div>
                </div>
            )
        }
}

export default IntroPage;
