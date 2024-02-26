import React from 'react';
import ads2Img from '../../assets/ads-2.png';

const Ads_2 = () => {
  return (
    <>
      <div className='max-w-container mx-auto mt-[130px] flex'>
        <div className='w-2/5'>
          <img className='w-full h-full' src={ads2Img} alt="" />
        </div>
        <div className='w-3/5 pl-[50px] py-[60px]'>
          <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[38px]'>Phone of the year</h2>
          <p className='w-[511px] font-DmSans text-secondaryColor text-paragraphtextSize font-normal leading-[30px] mb-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
          <button className='px-[59px] py-4 font-DmSans text-primaryColor text-buttontextSize font-bold border border-primaryColor hover:bg-primaryColor hover:text-white'>Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Ads_2