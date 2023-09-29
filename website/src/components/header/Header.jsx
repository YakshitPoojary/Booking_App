import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns';

function Header({type}) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false);

    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    });
    
    const navigate = useNavigate()

    const handleOption = (name,operation) =>{
        setOptions(prev=>{
            return{
            ...prev,
            [name]: operation === "i"?options[name] + 1 : options[name] - 1 ,
            };
        });
    };

    const handleSearch = (name, operation) =>{
        navigate("hotels",{state:{destination,date,options}})
    };

    return (
        <div className="header">
            <div className={type === 'list' ? "headerContainer listMode": "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>

                { type !== "list" &&
                    <>
                        <h1 className="headerTitle">A liftetime of Discounts? It's Genius</h1>
                        <p className="headerDesc">
                            Get rewarded for your travels- Unclock instant savinngs of 10% or more with free CheckInnJoy Account
                        </p>
                        <button className="headerBtn sign-in-register-btn">Sign In | Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                                <input 
                                    type="text" 
                                    placeholder="Where are you going" 
                                    className="headerSearchInput"
                                    onChange={e=>setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} 
                                    to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                </span>

                                {openDate && (<DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />)}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                                            <button className="optionCounterNumber">{options.adult}</button>
                                            <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <=0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                                            <button className="optionCounterNumber">{options.children}</button>
                                            <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                    <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                                            <button className="optionCounterNumber">{options.room}</button>
                                            <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Header;
