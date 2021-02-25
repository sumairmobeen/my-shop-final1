import React from "react";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'



function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-90" height="400" style={{margin: "0 auto",}}  
            src="https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-90" height="400" style={{margin: "0 auto"}} 
            src="https://foodiewish.com/wp-content/uploads/2020/07/Kalakand-Recipe.jpg"
            alt="First slide"
           
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>




        <Carousel.Item>
          <img
            className="d-block w-90" style={{margin: "0 auto"}}  height="400"
            src="https://hamariweb.com/recipes/images/recipeimages/488.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>





        <Carousel.Item>
          <img 
            className="d-block w-90" height="400" style={{margin: "0 auto"}} 
            src="https://content3.jdmagicbox.com/comp/def_content/sweet_shops/default-sweet-shops-6.jpg?clr=525c0a"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img 
            className=" d-block w-90" height="400" style={{margin: "0 auto"}} 
            src="https://i.ndtvimg.com/i/2015-07/sweet-625_625x350_51438261999.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  



   export default ControlledCarousel







// function Home() {

    
//     return (
//         <div className="main">
//         <>
//             <h1>Home</h1>

            
            



  
           

//         </>
//         </div>
//     )
// }

// export default Home;