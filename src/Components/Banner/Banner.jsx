import React from 'react'

const Banner = () => {
  return (
    <>
        <div className='bg-slider1 bg-cover bg-no-repeat '>
            <div className='max-w-container mx-auto pt-[167px] pb-[182px] pl-[143px] '>
                <div>
                    <h2 className='font-DmSans text-primaryColor text-heading1textSize font-bold mb-[33px]'>Final Offer</h2>
                    <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal mb-[49px]'>Up to <span className='font-DmSans text-primaryColor text-[40px] font-bold'>50%</span> sale for all furniture items!</p>
                    <button className='px-[59px] py-4 font-DmSans text-primaryColor text-buttontextSize font-bold border border-primaryColor hover:bg-primaryColor hover:text-white'>Shop Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner