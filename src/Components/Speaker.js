import React, {Component} from "react";


class Speaker extends Component{
    render(){
        return(

            <div class="card">
                <div class="card__side card__side--front">
                    <div className="card__picture-container">
                    <img src={this.props.img} className="card__picture-container-image" alt=""/>
                    </div>
                
                    
        
                    <div class="card__details">
                        <ul>
                            <li>{this.props.name}</li>
                            <li>{this.props.org}</li>
                            
                        </ul>
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                        <div class="card__about-speaker-box">
                            <p class="card__speaker-name">{this.props.name}</p>
                            <p class="card__about-speaker">{this.props.about}</p>
                        </div>
                        {/* <a href="#popup" class="btn btn--white">Book now!</a> */}
                    </div>
                </div>
            </div>
                  
        );
    }
}

export default Speaker;