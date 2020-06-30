import React, {Component} from "react";

import github from '../../img/Sponsors/github.png';
import devfolio from '../../img/Sponsors/Devfolio.png';




class Sponsors extends Component{
    render(){
        return(
            <div className = "section-sponsor">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Sponsors</h2>
            </div>
           
            
            <a className="btn btn--ghost u-margin-bottom-medium" href={this.props.btn_link}>Become a sponsor</a><br/>
                
            
                {this.props.children}
                
                
            
            
            
                
                
            </div>
        );
    }
}

export default Sponsors;