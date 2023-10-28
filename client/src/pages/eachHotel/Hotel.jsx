import "./hotel.css";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {faCircleArrowRight} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import StarRatings from 'react-star-ratings';
import Icon from "@mdi/react";
import { mdiPool,mdiWifi, mdiDumbbell, mdiSilverwareForkKnife, mdiSpa, mdiCoffee} from '@mdi/js'
import axios from 'axios';



const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const[slideNumber, setSlideNumber]=useState(0);
    const[open, setOpen]=useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(0);
    const [textReview, setTextReview] = useState("");


    const { data, loading, error } = useFetch(`https://bookkaro.onrender.com/hotels/find/${id}`)
    const {user} = useContext(AuthContext);
    const [commentsArray, setCommentsArray] = useState([]);
    const amenities = data.amenities;

    // const handleClick1 = async (e) => {
    //     e.preventDefault();
    //     dispatch({ type: "LOGIN_START" });
    //     try {
    //       const res = await axios.post(`https://bookkaro.onrender.com/hotels/review/${id}`, credentials);
    //       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    //       navigate("/")
    //     } catch (err) {
    //       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    //       alert(error.message);
    //       window.location.reload(false);
    //     }
    // };

    
    function getAmenityIcon(amenity) {
        switch (amenity) {
          case "pool":
            return <Icon path={mdiPool} size={1} />;
          case "wifi":
            return <Icon path={mdiWifi} size={1} />;
          case "dumbbell":
            return <Icon path={mdiDumbbell} size={1} />;
          case "silverware-fork-knife":
            return <Icon path={mdiSilverwareForkKnife} size={1} />;
          case "spa":
            return <Icon path={mdiSpa} size={1} />;
          case "breakfast":
            return <Icon path={mdiCoffee} size={1} />;
          default:
            return null;
        }
    }

      
    
    useEffect(() => {
        if (data.comments && Array.isArray(data.comments)) {
            setCommentsArray(data.comments.map((comment) => {
                const [author, rating, review] = comment.match(/^(.*?)\.(\d+)\.(.*)$/).slice(1);
                return {
                    author,
                    rating: parseFloat(rating),
                    review,
                };
            }));
        }
    }, [data]);
    
    
    
    const navigate = useNavigate()

    const { dates, options } = useContext(SearchContext);
    
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    
    let days = 0;
    
    if (dates && dates[0] && dates[0].endDate && dates[0].startDate) {
        days = dayDifference(dates[0].endDate, dates[0].startDate);
    }
    
    const handleOpen = (i)=> {
        setSlideNumber(i);
        setOpen(true);
    } 
    
    const handleMove = (direction) => {
        let newSlideNumber;
        
        if(direction==="l") {
            newSlideNumber= slideNumber === 0 ? 5 : slideNumber - 1;
        }else{
            newSlideNumber= slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber)
    };
    
    useEffect(() => {
        const totalCost = days * data.cheapestPrice * options.room;
        localStorage.setItem('totalCost', totalCost);
    }, [days, data.cheapestPrice, options.room]);

    useEffect(() => {
        const savedTotalCost = localStorage.getItem('totalCost');

        if (savedTotalCost) {
            console.log("Total cost:", parseFloat(savedTotalCost));
        }
    }, []);
    
    const handleClick = () => {
        if(user){
            setOpenModal(true)
        } else {
            navigate("/login")
        }
    };

    const handleReviewsMove = (direction) => {
        const container = document.querySelector(".reviewsContainer");
    
        if (direction === "l") {
          container.scrollLeft -= 1000;
        } else {
          container.scrollLeft += 1000;
        }
    };

    console.log(days * data.cheapestPrice * options.room);
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            {loading ? ("loading") : (
                <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"  onClick={()=> handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location – {data.distance}m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {data.photos?.map((photo, i) => (
                            <div key={i} className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                            </div>
                        ))}

                    </div>

                    <div className="hotelDetails">

                    <div className="hotelDetailsColumn">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">{data.description}</p>
                        </div>

                        <div className="hotelAmenities">
                            <h1>Amenities</h1>
                            <div className="amenitiesIcons">
                            {amenities && amenities.map((amenity, index) => (
                                <div key={index} className="amenityItem">
                                {getAmenityIcon(amenity)}
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>


                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a {days}-night stay!</h1>
                            <h2>
                                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                            </h2>
                            <button onClick={handleClick}>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>

            </div>
            )}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}

            <div className="hotelReviews">
                <h1 className="reviewsTitle">Reviews</h1>
                <div className="sliderReviews">
                    <div className="reviewsContainer">
                        {commentsArray.map((comment, i) => (
                        <div
                            key={i}
                            className={`reviewBox ${i === slideNumber ? "active" : ""}`}
                        >
                            <div className="reviewHead">
                            <div className="reviewAuthor">
                                <h3>
                                <b>{comment.author}</b>
                                </h3>
                            </div>
                            <div className="reviewStars">
                                <StarRatings
                                rating={comment.rating}
                                starRatedColor="gold"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="0px"
                                />
                            </div>
                            </div>
                            <div className="review">{comment.review}</div>
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


            <div className="reviewDiv">
                <div className="bs">
                    <h3>Please leave a review for our beloved hotel. It will help us get gud noob.</h3>
                </div>
                <div className="Reviewcontainer">
                    <div className="header">
                        <div className="text">Submit A Review</div>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">
                        <div className="input">
                            <input
                            type="text"
                            id="userName"
                            
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Name"
                            />
                        </div>

                        <div className="input">
                            <input
                            type="number"
                            id="rating"
                            value={rating}
                            onChange={(e) => {
                                const newRating = parseFloat(e.target.value);
                                if (!isNaN(newRating)) {
                            
                                setRating(Math.min(10, Math.max(0, newRating))); 
                                }
                            }}
                            placeholder="Rating out of 10"
                            />
                        </div>
                        
                        <div className="input">
                            <input
                            id="textReview"
                            value={textReview}
                            onChange={(e) => setTextReview(e.target.value)}
                            placeholder = "Review"
                            />
                        </div>
                    </div>

                    <div className="submit-container">
                        <div className="submit">Submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;