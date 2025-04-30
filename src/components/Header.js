import { Link } from 'react-router-dom';
import Logo from '../../src/assets/images/logo.png';
import Button from '@mui/material/Button';
import CountryDropdown from './CountryDropdown';

import { BiSolidUserCircle } from "react-icons/bi";
import { RiShoppingBasketFill } from "react-icons/ri";
import SearchBox from './Header/SearchBox';
import Navigation from './Header/SearchBox/Navigation';
const Header = () => {
    return (
        <>
        <div className="headerWrapper">
        <div className="top-strip bg-blue">
            <div className="container">
                <p className="mb-0 mt-0 text-center">
                    Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay.
                </p>
            </div>
        </div>

        <div className="header">

            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="col-sm-10 d-flex align-items-center part2">
                        <CountryDropdown />

                        <SearchBox />

                        <div className='part3 d-flex align-items-center  ml-auto'>
                            <Button className='circle mr-3'><BiSolidUserCircle /></Button>
                            <div className='ml-auto cartTab d-flex align-items-center'>
                                <span className='price'>$5.23</span>
                                <div className='position-relative'>
                                    <Button className='circle ml-2'><RiShoppingBasketFill /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <Navigation/>
    </div>
    </>
    );
};

export default Header;
