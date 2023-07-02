import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { Link } from "react-router-dom";
import img from "./img/Picsart_23-06-29_01-12-13-287.jpg";
import infraImg1 from "./img/infra-1.jpg";
import infraImg2 from "./img/infra-2.jpg";
import infraImg3 from "./img/infra-3.jpg";
import infraImg4 from "./img/infra-4.jpg";
import infraImg5 from "./img/infra-5.jpg";
import infraImg6 from "./img/infra-6.jpg";
// import infraImg7 from "./img/infra-7.jpg";
import infraImg8 from "./img/infra-8.jpg";
import infraImg10 from "./img/infra-10.jpg";
import infraImg9 from "./img/infra-9.jpg";
import Footer from "./Footer";
import backgroundImage from "./img/IMG_20230629_231435.jpg";
// import Button from "./button";
function HomeBody() {
  const LabelContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    width: "250px",
    // borderRadius:"30px",
    color: "#fff",
    margin: "50px 15px",

    fontSize: "4rem",
  };
  const mapStyle = {
    // height: "200%",
    border:"0px"
  };
  const title = {
    display: "flex",
    justifyContent: "center",
  };
  const LabelContainer1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    width: "150px",
    color: "#fff",
    margin: "10px 10px",
    fontSize: "4rem",
  };
  const birthdayStyle = {
    justifyContent: "centre",
    color: "black",
    zIndex: "900",
    position: "relative",
    // background:"url(img/IMG_20230629_231435.jpg)"
    marginTop: "70px",
    marginBottom: "60px",
    fontSize: "22px",
    // fontWeight:"900"
  };
  const items = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];
  const items2 = [
    { id: 1, title: "Library", loc: infraImg1 },
    { id: 2, title: "Laboratries", loc: infraImg2 },
    { id: 3, title: "Auditorium", loc: infraImg3 },
    { id: 4, title: "Music", loc: infraImg4 },
    { id: 5, title: "Cafeteria", loc: infraImg5 },
    { id: 6, title: "Book Shop", loc: infraImg6 },

    { id: 8, title: "Infirmary", loc: infraImg8 },
    { id: 9, title: "Lift", loc: infraImg9 },
    { id: 10, title: "Yoga", loc: infraImg10 },
  ];
  const birthdayItems = [
    { id: 1, title: "Happy Birthday Utkarsh class X-A" },
    { id: 2, title: "Happy Birthday Vinay class XI-B" },
    { id: 3, title: "Happy Birthday Keshab class VII-C" },
  ];

  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  function changeState() {
    setToggle(false);
    setToggle2(true);
  }
  function changeState2() {
    setToggle2(false);
    setToggle(true);
  }

  // const myArrow = ({ type, onClick, isEdge }) => {
  //   const pointer = type === consts.PREV ? '' : '';
  //   return (
  //     <Button onClick={onClick} disabled={isEdge}>
  //       {pointer}
  //     </Button>
  //   );
  // };

  return (
    <div className="body">
      <div className="bodyp1">
        <div className="image">
          <div className="aboutUs">
            <span>About</span>
            <h1>ABC Public School</h1>
            <p>
              {" "}
              Welcome to K.L. International School, Meerut, an English Medium
              Co-educational Senior Secondary School, that combines the very
              best in educational practices, powered and propelled by a
              philosophy of education that is eclectic and yet truly modern.
              Rated as the most promising CBSE-affiliated school of Western U.P,
              the school offers education to children from Kindergarten to
              Senior Secondary level.
            </p>
            <a href="">Read More</a>
          </div>
          <div className="features">
            <div className="rightbox">
              <h3 className="c1">
                A+
                <span>Exam Result</span>
              </h3>
            </div>
            <div className="rightbox">
              <h3 className="c2">
                145+
                <span>Class Room</span>
              </h3>
            </div>
            <div className="rightbox">
              <h3 className="c3">
                300+
                <span>Certified Teachers</span>
              </h3>
            </div>

            <div className="f2"></div>
            <div className="f3"></div>
          </div>
          <div className="birthday">
            <div>
              <div className="movingContent">
                {/* <img src={backgroundImage} alt="" /> */}
                <Carousel
                  // renderArrow={myArrow}
                  verticalMode
                  itemsToShow={1}
                  itemsToScroll={1}
                  enableAutoPlay
                  autoPlaySpeed={1500}
                >
                  {birthdayItems.map((items) => (
                    <div key={items.id}>
                      <h4 style={birthdayStyle}>{items.title}</h4>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyp2">
        <h3>Achievements & Activities</h3>
        <div className="slider">
          <Carousel itemsToScroll={1} itemsToShow={4} focusOnSelect={true}>
            {items.map((item) => (
              <div key={item.id}>
                <img src={img} style={LabelContainer} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="bodyp3">
        <div className="buttonside">
          <button onClick={() => changeState()} class="btn-images">
            Photo Gallery
          </button>

          <button onClick={() => changeState2()} class="btn-video">
            Video Gallary
          </button>
        </div>
        {toggle === false && (
          <div className="hidden">

          <ul className="list-groupi">
            <img
              src="https://yaleschoolnj.com/wp-content/uploads/2022/02/school-mullica.jpg"
              alt=""
            />
            <img
              src="https://yaleschoolnj.com/wp-content/uploads/2022/02/kirbys-mill.jpg"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Hibbing_High_School_2014.jpg"
              alt=""
            />
            <img
              src="https://gray-wmtv-prod.cdn.arcpublishing.com/resizer/damY5OMA44LOm1fD1Zl0vK79AE8=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/UYZGCONN6BGYZIN5VTMNN3MZLU.jpg"
              alt=""
            />
          </ul>
          </div>
        )}
        {toggle2 === false && (
         <div className="hidden">

          <ul className="list-groupv">
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/65qoZ6qbVwo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/nQY3BW-LzEo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/oM01ATkZHsk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="320"
              height="200"
              src="https://www.youtube.com/embed/MV_bVuKA2QY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </ul>
         </div>
        )}
      <div className="Styling">
        <Link to="/infra" style={{textDecoration: 'none'}}>
        <h1 className="infraStr">Infrastructure</h1>
        </Link>
        <Carousel
          itemsToScroll={1}
          itemsToShow={4}
          focusOnSelect={true}
          itemHeight={10}
          itemWidth={10}
        >
          {items2.map((items) => (
            <div key={items.id}>
              <img src={items.loc} style={LabelContainer1} alt="" />
              <h4 style={title}>{items.title}</h4>
            </div>
          ))}
        </Carousel>
      </div>

      <Footer></Footer>
      </div>
      {/* <iframe className="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65652.06191353113!2d77.66989431155599!3d28.969918528309535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6452ea119981%3A0x7242561d9c89f73!2sMilitary%20Hospital!5e0!3m2!1sen!2sin!4v1688189034526!5m2!1sen!2sin"
        width="400"
        height="900"
        // style={mapStyle}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}

export default HomeBody;
