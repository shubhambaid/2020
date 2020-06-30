import React, {Component} from "react";


class Faq extends Component{
    render(){
        return(
    
            <section className = "section-faq" id="section-faq">
            <div className="lineargradient">
            <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">FAQ</h2>
            </div>
           
            <div className="row">
                {this.props.children}
            </div>
            </div>
            
            
            
                
                
            </section>
           
        );
    }
}

export default Faq;