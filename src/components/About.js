import React from "react";
import "../css/About.css";
import slideImage from "../images/slideimage.png";
function About() {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade ">
          <div className="grid2">
            <div className="slide_image">
              <img src={slideImage} alt="" />
            </div>
            <div className="slide_content">
              <h1>About Us</h1>
              <p>
                So how do we get there?
                <br /> <br /> Reva university consists of many blocks,but three
                are the most important in them,which are the C.V Raman block,Sir
                M.Vishweswaraya block and the Swami Vivekananda block,which
                coincidently seems like the three supreme gods of Hinduism
                Brahma Vishnu and Mahesh acting upon their important fields.
                <br /> <br />
                Welcome to Reva Hack 2020.
              </p>
            </div>
          </div>
        </div>
        <div className="mySlides fade ">
          <div className="grid2">
            <div className="slide_image">
              <img src={slideImage} alt="" />
            </div>
            <div className="slide_content">
              <h1>About Us</h1>
              <p>
                So how do we get there?
                <br /> <br /> Reva university consists of many blocks,but three
                are the most important in them,which are the C.V Raman block,Sir
                M.Vishweswaraya block and the Swami Vivekananda block,which
                coincidently seems like the three supreme gods of Hinduism
                Brahma Vishnu and Mahesh acting upon their important fields.
                <br /> <br />
                Welcome to Reva Hack 2020.
              </p>
            </div>
          </div>
        </div>
        <div className="mySlides fade ">
          <div className="grid2">
            <div className="slide_image">
              <img src={slideImage} alt="" />
            </div>
            <div className="slide_content">
              <h1>About Us</h1>
              <p>
                So how do we get there?
                <br /> <br /> Reva university consists of many blocks,but three
                are the most important in them,which are the C.V Raman block,Sir
                M.Vishweswaraya block and the Swami Vivekananda block,which
                coincidently seems like the three supreme gods of Hinduism
                Brahma Vishnu and Mahesh acting upon their important fields.
                <br /> <br />
                Welcome to Reva Hack 2020.
              </p>
            </div>
          </div>
        </div>
        <a className="prev" onClick="plusSlides(-1)">
          &#10094;
        </a>
        <a className="next" onClick="plusSlides(1)">
          &#10095;
        </a>
      </div>

      <div className="dots" style="text-align:center">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
}

export default About;
