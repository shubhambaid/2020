import React, {Component} from "react";



class Sponsors extends Component{
    render(){
        return(
            
                
            <div>
                <a href={this.props.link}></a><img src={this.props.img} className={this.props.type} alt={this.props.alt}/>
            </div>
            

        );
    }
}

export default Sponsors;