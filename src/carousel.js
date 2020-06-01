import React,{Component} from "react";
import App from "./App"
import "./App.css";
import {Carousel} from "react-bootstrap"; 
class Carouse extends Component{
render(){
  return(
    <center>
    <Carousel data-interval="200">
    <Carousel.Item>
      <img
        className="corona"
        src="https://plan-international.org/sites/default/files/media_wysiwyg/covid19-prevention.gif"
        alt="First slide"
      />
  
    </Carousel.Item>
   
    <Carousel.Item>
      <img
        className="corona"
        src="https://farmradio.org/wp-content/uploads/2020/04/Covid-social-graphics-round2-web-banner.jpg"
        alt="Second slide"
      />
  
    </Carousel.Item>
   
    <Carousel.Item>
      <img
        className="corona"
        src="https://cdn5.vectorstock.com/i/1000x1000/64/49/covid19-coronavirus-prevention-and-precaution-vector-30346449.jpg"
        alt="Third slide"
      />
  
    </Carousel.Item>
  </Carousel>
  </center>

  )
}
  

}
export default Carouse;

