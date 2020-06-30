import React, {Component} from "react";
// import "./components.css";

import Nav from "./HOC/Nav"; 
import Header from "./HOC/Header"; 
import About from "./HOC/About";
import Faq from "./HOC/Faq";
import Sponsors from "./HOC/Sponsors";
import Speakers from "./HOC/Speakers";
import Team from "./HOC/Team";
import Footer from "./HOC/Footer";


import Qna from "./qna";
import TitleSponsor from "./TitleSponsor";
import Sponsor from "./Sponsor";
import Speaker from "./Speaker";
import TeamMember from "./TeamMembers"

//Sponsors
import github from "../img/Sponsors/github.png";
import devfolio from "../img/Sponsors/Devfolio.png";

//Speakers
import akash from "../img/Speakers/akash.jpeg";




class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Header
                    pmain = "Reva Hack"
                    psec = "<2020>"
                    pri_btn_text = "Register Now!"
                    sec_btn_text = "Call For Speaker"
                />
                <About 
                    title="About reva hack"
                    btn_text = "Register Now!"
                >
                hello
                </About>
                <Faq>
                    <Qna
                        q="sample question"
                        a="sample answer"
                    />
                    <Qna
                        q="sample question"
                        a="sample answer"
                    />
                </Faq>
                <Sponsors>
                    <TitleSponsor>
                        <div className="row">
                            <div className="col-1-of-2">
                                <Sponsor
                                    link = "#"
                                    img = {github}
                                    type = "title_sponsor"
                                    alt = "GitHub"
                                />

                            </div>
                            <div className="col-1-of-2">
                            <Sponsor
                                link = "#"
                                img = {devfolio}
                                type = "title_sponsor"
                                alt = "Devfolio"
                            />

                            </div>
                    
                        </div>
                    </TitleSponsor>
                </Sponsors>
                <Speakers>
                    <div class="row">
                        <div class="col-1-of-3">
                            <Speaker
                                img = {akash}
                                name = "Akash Hadagali"
                                org = "Reva University"
                                about = "Tech enthusiast and a GitHub campus expert"
                            />
                        </div>
                    </div>
                </Speakers>
                <Team>
                    <div class="row">
                        <div class="col-1-of-3">
                            <TeamMember
                                img = {akash}
                                name = "Akash Hadagali"
                                org = "organiser"
                            />
                        </div>
                    </div>

                </Team>
                <Footer/>
                
                
            </div>
        );
    }
}

export default Home;