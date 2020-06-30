import React, {Component} from "react";

class Qna extends Component{
    render(){
        return(
            <div className="u-margin-bottom-medium">
                <h3 class="heading-tertiary">{this.props.q}</h3>
                <p class="paragraph">
                    {this.props.a}
                </p>
            </div>
        );
    }
}

export default Qna;