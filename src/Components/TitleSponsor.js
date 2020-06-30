import React, {Component} from "react";






class TitleSponsors extends Component{
    render(){
        return(
            <div>
                <h3 className="heading-tertiary u-margin-bottom-medium">Title sponsors</h3>
                {this.props.children}
            </div>
        
        );
    }
}

export default TitleSponsors;