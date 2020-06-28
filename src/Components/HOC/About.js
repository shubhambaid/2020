import React, {Component} from "react";


class About extends Component{
    render(){
        return(
            <div className = "section-about">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">{this.props.title}</h2>
            </div>
           
            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph">{this.props.children}</p>
                </div>
                <div className="col-1-of-2">
                    <p className="paragraph">{this.props.children}</p>
                </div>
            </div>
            
            
                
                
            </div>
        );
    }
}

export default About;

