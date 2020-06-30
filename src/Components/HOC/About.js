import React, {Component} from "react";


class About extends Component{
    render(){
        return(
            <div className = "section-about" id = "section-about">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">{this.props.title}</h2>
            </div>
           
            <div className="row">
                <div className="col-1-of-2">
                    <p className="paragraph">{this.props.children}</p>
                </div>
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary">Code of conduct</h3>
                    <p className="paragraph">We will be following the Hack Code of Conduct, which can be found here.</p>
                </div>
                
            </div>
            
            <a className="btn btn--ghost u-margin-bottom-medium" href={this.props.btn_link}>{this.props.btn_text}</a><br/>
                
                
            </div>
        );
    }
}

export default About;

