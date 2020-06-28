import React, {Component} from "react";


class Header extends Component{
    render(){
        return(
            <div className = 'header'>
                <div className="header__logo-box">
                    <img src="./public/img/reva_logo_white.png" alt="Logo" className="header__logo"/>
                </div>

                <div className="header__text-box">
                    <h1 class="heading-primary">
                        <span className="heading-primary--main">{this.props.pmain}</span>
                        <span className="heading-primary--sub">{this.props.psec}</span>
                    </h1>

                    <a className="btn btn--ghost u-margin-bottom-medium" href={this.props.sec_btn_link}>{this.props.sec_btn_text}</a><br/>
                    <a href={this.props.pri_btn_link} class="btn btn--white btn--animated heading-tertiary">{this.props.pri_btn_text}</a>
                </div>
            </div>
        );
    }
}

export default Header;