import React from 'react';
import { BiMenuAltLeft, BiSolidDownArrow } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const BtmHeader = () => {
  return (
    <>
      <div className='bg-[#F5F5F3]'>
        <div className='max-w-container mx-auto flex justify-between py-[25px]'>
          <div className='W-1/4 flex my-auto font-DmSans text-buttontextSize font-normal text-primaryColor'><BiMenuAltLeft className='mr-1' />Shop by</div>
            <div className='W-2/4'>
              <div className='relative' >
                <input className=' w-[601px] py-[17px] pl-[21px] pr-[17px]' type="text" placeholder='Search Products' />
                <IoSearch className='text-primaryColor text-xl absolute top-[20px] right-[17px]' />
              </div>
          </div>
          <div className='W-1/4 flex gap-x-[41px] my-auto'>
            <div className='flex gap-x-1 text-primaryColor text-xl'>
              <FaUser />
              <BiSolidDownArrow />
            </div>
            <FaShoppingCart className='text-2xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BtmHeader