import React from 'react';
import footerLogo from '../../assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className=' bg-[#F5F5F3]'>
                <div className='max-w-container mx-auto pt-[55px] pb-[52px] mt-[140px]'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h3 className='mb-[17px]'>MENU</h3>
                            <ul className='font-DmSans text-buttontextSize font-normal text-secondaryColor'>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Home</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Shop</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>About</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Contacts</a></li>
                                <li><a href="" className='hover:text-primaryColor'>Journal</a></li>
                            </ul>
                            <div className='flex gap-x-[25px] mt-[65px]'>
                                <a href=""><FaFacebookF className='text-primaryColor text-[18px]' /></a>
                                <a href=""><FaLinkedinIn className='text-primaryColor text-[18px]' /></a>
                                <a href=""><FaInstagram className='text-primaryColor text-[18px]' /></a>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='mb-[17px]'>SHOP</h3>
                            <ul className='font-DmSans text-buttontextSize font-normal text-secondaryColor'>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Category 1</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Category 2</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Category 3</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Category 4</a></li>
                                <li><a href="" className='hover:text-primaryColor'>Category 5</a></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='mb-[17px]'>HELP</h3>
                            <ul className='font-DmSans text-buttontextSize font-normal text-secondaryColor'>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Privacy Policy</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Terms & Conditions</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Special E-shop</a></li>
                                <li className='mb-[6px]'><a href="" className='hover:text-primaryColor'>Shipping</a></li>
                                <li><a href="" className='hover:text-primaryColor'>Secure Payments</a></li>
                            </ul>
                        </div>
                        <div className=''>
                            <div className='mb-[15px]'>
                                <p className='font-DmSans text-paragraphtextSize font-bold text-primaryColor leading-[27px]'>(052) 611-5711</p>
                                <p className='font-DmSans text-paragraphtextSize font-bold text-primaryColor'>company@domain.com</p>
                            </div>
                            <p className='font-DmSans text-buttontextSize font-normal text-secondaryColor leading-[23px]'>575 Crescent Ave. Quakertown, PA 18951</p>
                        </div>
                        <div className=''>
                            <a href=""><img src={footerLogo} alt="logo" /></a>
                            <p className='font-DmSans text-buttontextSize font-normal text-secondaryColor mt-[211px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer