import React from 'react';
import logo from '../../../assets/logo.png';

const TopHeader = () => {
    return (
        <>
            <div className="bg-white">
                <div className='max-w-container mx-auto flex py-8'>
                    <div className='w-1/3'>
                        <a href=""><img src={logo} alt="logo" /></a>
                    </div>
                    <div className='w-2/3'>
                        <ul className='flex gap-x-[40px] font-DmSans text-buttontextSize font-normal text-paragraphColor'>
                            <li><a href="" className='hover:text-primaryColor'>Home</a></li>
                            <li><a href="" className='hover:text-primaryColor'>Shop</a></li>
                            <li><a href="" className='hover:text-primaryColor'>About</a></li>
                            <li><a href="" className='hover:text-primaryColor'>Contacts</a></li>
                            <li><a href="" className='hover:text-primaryColor'>Journal</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader