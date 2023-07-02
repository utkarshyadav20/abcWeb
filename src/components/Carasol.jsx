import React from "react";
// import image from "./img/unnamed.jpg";
// import items from "./data"
import SimpleImageSlider from "react-simple-image-slider";

function Carasol() {
//     const [imageNum, setImageNum] = useState(1);
    const sliderImages=[
      {
            url:"https://yaleschoolnj.com/wp-content/uploads/2022/08/cherry-hill-slider-min-aspect-ratio-1920-600.jpg"     
      },
      {
            url:"https://yaleschoolnj.com/wp-content/uploads/2022/08/home-slide-01-aspect-ratio-1920-600.jpg"
      },
      {
            url:"https://yaleschoolnj.com/wp-content/uploads/2022/08/ellisburg-slider-min-aspect-ratio-1920-600.jpg"
      },
      {
            url:"https://yaleschoolnj.com/wp-content/uploads/2022/08/voc-annex-slider-min-aspect-ratio-1920-600.jpg"
      },
      {
            url:"https://yaleschoolnj.com/wp-content/uploads/2022/10/marlton-home-slider-min-aspect-ratio-1920-600.jpg"
      }
    ];

  return (
    <div class="carousel-container">
        <SimpleImageSlider
        width={1440}
        height={500}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true} 
        autoPlayDelay = {3}
        />
     {/* <img src={image} alt="" /> */}
    </div>
  );
}

export default Carasol;
