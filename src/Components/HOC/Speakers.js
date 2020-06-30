import React, {Component} from "react";


class Speakers extends Component{
    render(){
        return(
            <div className = "section-speaker">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Speakers</h2>
            </div>
           
            {this.props.children}
                
                
            </div>
            
            
                
                
            
        );
    }
}

export default Speakers;