import React, {Component} from "react";


class TeamMembers extends Component{
    render(){
        return(

            <div class="teamcard">
                <div class="teamcard__side teamcard__side--front">
                    <div className="teamcard__picture-container">
                    <img src={this.props.img} className="teamcard__picture-container-image" alt=""/>
                    </div>
                
                    
        
                    <div class="card__details">
                        <ul>
                            <li>{this.props.name}</li>
                            <li>{this.props.org}</li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
                  
        );
    }
}

export default TeamMembers;