import React, {Component} from "react"
import  Four0Four from "../images/404.png";

class FourZeroFour extends Component{

  frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
  }

  openhome(){
    window.open("https://fluentdesignforweb.github.io/", "_self", "replace");
  }

  
  render(){
    return(
      <div style={{overflowY: "hidden"}}>
        <button className="large frost_container primary_blue center" onMouseOver={this.frosting} onClick={this.openhome} style={{position: "fixed", bottom: "18%", left: "45vw", zIndex: "20"}}>
          <span className="frost">Head To Home</span>
        </button>
        <img src={Four0Four} alt="" style={{height: "99.5vh", width: "100%", overflow: "hidden"}} />
        <div className="column large0 medium0 small0 center">
          <h1 style={{fontSize: "20vw"}} className="small0 ta_center"><span className="type">404</span></h1>
          <h1 style={{fontSize: "20vh"}} className="large0 medium0 ta_center"><span className="type">404</span></h1>
          <p className="ta_center">
            <h2 className="ta_center">We Couldn't Connect The Dots</h2><br /><br />
            <span style={{fontSize: '20px', textAlign: "center", display: 'block'}} className="ta_center">The page you want to access doesn't exist or you assembled the link incorrectly</span>
          </p><br />
          <br /><br />
          <button className="large frost_container primary_blue center" onMouseOver={this.frosting} onClick={this.openhome}>
            <span className="frost">Head To Home</span>
          </button>
        </div>
      </div>
    );
  }

}


export default FourZeroFour;
