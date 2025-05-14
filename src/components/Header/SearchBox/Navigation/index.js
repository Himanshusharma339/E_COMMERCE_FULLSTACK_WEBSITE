import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";


const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left side: ALL CATEGORIES Button */}
                    <div className="col-sm-2 navPart1">
                        <Button
                            className="allCatTab d-flex align-items-center"
                            variant="contained"
                            disableElevation
                        >
                            <span className="icon1 me-2"><IoIosMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span className="icon2 ms-2"><FaAngleDown /></span>
                        </Button>
                    </div>

                    {/* Right side: Nav links */}
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item ">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">Fashion</Link>
                            </li>
                            <li className="list-inline-item ">
                                <Link to="/">Electronics</Link>
                            </li>
                            <li className="list-inline-item ">
                                <Link to="/">Bakery</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">grocery</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">Mobiles</Link>
                            </li>
                            <li className="list-inline-item ">
                                <Link to="/">Blog</Link>
                            </li>
                            <li className="list-inline-item ">
                                <Link to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    );
};

export default Navigation;
