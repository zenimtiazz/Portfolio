import { useState } from "react";
import  "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: " Detail-oriented, organized and meticulous person.  ",      
    },
    {
      id: "2",
      title: "Works at fast pace to meet tight deadlines.",
    },
    {
      id: "3",
      title: "Enthusiastic team player ready to contribute.",
    },
    {
     id: "4",
    title: "Technically proficient and analytical problem solver.",

  },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                 
                  <h1>{d.title}</h1>
                  {/* <p>{d.desc}</p> */}
                 
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}