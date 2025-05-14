import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

import Dialog from '@mui/material/Dialog';

import { IoSearch } from 'react-icons/io5';
import { IoMdCloseCircle } from "react-icons/io";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const CountryDropdown = () => {
    const [isOpenModal,setisOpenModal] = useState(false);
    const [selectedTab,setselectedTab] = useState(null);

    const context = useContext(MyContext);

    const selectCountry = (index)=>{
        setselectedTab(index);
        setisOpenModal(false);
       
    }

    const filterList=(e)=> {
        const keyword = e.target.value.toLowerCase();
    }
    return (
        <>
            <Button className="countryDrop">
                <div className='info d-flex flex-column'>

                    <span className='lable'> Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={true} className='locationModal'>
                <h4 className='mb-0'>choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>

                <Button className="close_"></Button>



                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search Your area... ' onChange={filterList}/>
                    <Button><IoSearch /></Button>
                </div>
                <ul className="countryList mt-3">
                    {
                        context.countryList?.length !==0 && context.countryList?.map((item,index)=>{
                            return (
                                <li key={index}><Button onClick={()=>selectCountry(index)}
                                className={`${selectedTab===index ? 'active' : '' }`}>{item.country}</Button></li>

                            )

                            
                        })
                    }
                    
                   

                </ul>


            </Dialog>
        </>
    );

};
export default CountryDropdown;
// 17.18 lec7
