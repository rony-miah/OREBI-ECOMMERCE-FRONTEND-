import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck, FaUndo } from "react-icons/fa";

const BannerInfo = () => {
    return (
        <>
            <div className='bg-white border border-[#F0F0F0]'>
                <div className='max-w-container mx-auto flex justify-between py-[22px]'>
                    <div className='flex'>
                        <RiNumber2 className='my-auto' />
                        <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal ml-[17px]'>Two years warranty</p>
                    </div>
                    <div className='flex'>
                        <FaTruck className='my-auto'/>
                        <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal ml-[15px]'>Free shipping</p>
                    </div>
                    <div className='flex'>
                        <FaUndo className='my-auto'/>
                        <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal ml-[15px]'>Return policy in 30 days</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default BannerInfo