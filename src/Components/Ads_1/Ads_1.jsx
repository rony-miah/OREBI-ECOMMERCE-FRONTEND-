import React from 'react';

const Ads_1 = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='max-w-container mx-auto flex mt-[140px] gap-x-[40px]'>
                    <div className='w-1/2 bg-ad1 bg-no-repeat pt-[440px] pb-[72px] pl-[64px]'>
                        <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[36px]'>Phones Sale</h2>
                        <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal mb-[49px]'>Up to <span className='font-DmSans text-primaryColor text-[40px] font-bold'>30%</span> sale for all phones!</p>
                        <button className='px-[59px] py-4 font-DmSans text-primaryColor text-buttontextSize font-bold border border-primaryColor hover:bg-primaryColor hover:text-white'>Shop Now</button>
                    </div>
                    <div className='w-1/2 h-full'>
                        <div className='w-full h-1/2 bg-ad2 bg-no-repeat py-[66px] pl-[50px] mb-5'>
                            <div>
                                <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[36px]'>Electronics Sale</h2>
                                <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal mb-[49px]'>Up to <span className='font-DmSans text-primaryColor text-[40px] font-bold'>70%</span> sale for all electronics!</p>
                                <button className='px-[59px] py-4 font-DmSans text-primaryColor text-buttontextSize font-bold border border-primaryColor hover:bg-primaryColor hover:text-white'>Shop Now</button>
                            </div>
                        </div>
                        <div className='w-full h-1/2 bg-ad3 bg-no-repeat py-[66px] pl-[50px]'>
                            <div>
                                <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[36px]'>Furniture Offer</h2>
                                <p className='font-DmSans text-secondaryColor text-paragraphtextSize font-normal mb-[49px]'>Up to <span className='font-DmSans text-primaryColor text-[40px] font-bold'>50%</span> sale for all furnitures!</p>
                                <button className='px-[59px] py-4 font-DmSans text-primaryColor text-buttontextSize font-bold border border-primaryColor hover:bg-primaryColor hover:text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ads_1