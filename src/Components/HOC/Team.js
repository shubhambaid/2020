import React, {Component} from "react";


class Team extends Component{
    render(){
        return(
            <div className = "section-team">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">organising team</h2>
            </div>
           
            {this.props.children}
                
                
            </div>
            
            
                
                
            
        );
    }
}

export default Team;