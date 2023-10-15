import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import StarRatings from 'react-star-ratings';


const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleReviewsMove = (direction) => {
    const container = document.querySelector(".reviewsContainer");

    if (direction === "l") {
      container.scrollLeft -= 1000;
    } else {
      container.scrollLeft += 1000;
    }

  };

  const reviews = [
    {
      author: "Ben Dover",
      date: "October 10, 2023",
      content: "Great hotel with excellent service!",
      rating: 8.1,
    },
    {
      author: "Deez Nuts",
      date: "October 5, 2023",
      content: "The location is perfect for exploring the city.",
      rating: 8.7,
    },
    {
      author: "Ligma Balls",
      date: "October 5, 2023",
      content: "The location is perfect for exploring the city.",
      rating: 8.7,
    },
    {
      author: "Sug Ondese",
      date: "October 5, 2023",
      content: "The location is perfect forforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforfor exploring the city.",
      rating: 8.7,
    },
    {
      author: "Mike Litoris",
      date: "October 5, 2023",
      content: "The location is perfect for exploring the city.",
      rating: 8.7,
    },
    {
      author: "Nee Ga",
      date: "October 5, 2023",
      content: "The location is perfect for exploring the city.",
      rating: 8.7,
    },
    {
      author: "Mike Oxlong",
      date: "October 10, 2023",
      content: "Great hotel with excellent service!",
      rating: 8.1,
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">

        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Seven Hills Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Marol Andheri</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs 1140 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio a est ea non esse reprehenderit recusandae sunt, voluptates, maxime sapiente consequuntur quasi, eveniet cum accusamus nostrum tempore praesentium excepturi.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Marol, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>Rs 9450</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        
        
        <div className="hotelReviews">
          <h1 className="reviewsTitle">Reviews</h1>
          <div className="sliderReviews">
            <div className="reviewsContainer">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className={`reviewBox ${
                    i === slideNumber ? "active" : ""
                  }`}
                >
                  <div className="reviewHead">
                    <div className="reviewAuthor">
                      <h3>
                        <b>{review.author}</b>
                      </h3>
                    </div>
                    <div className="reviewStars">
                      <StarRatings
                        rating={review.rating}
                        starRatedColor="gold"
                        numberOfStars={10}
                        starDimension="20px"
                        starSpacing="0px"
                      />
                    </div>
                  </div>
                  <p>{review.date}</p>
                  <div className="review">{review.content}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sliderControls">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleReviewsMove("l")}
            />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleReviewsMove("r")}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hotel;
