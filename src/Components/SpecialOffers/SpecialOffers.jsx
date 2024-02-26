import React from 'react';
import specialproduct1 from '../../assets/specialproduct1.png';
import specialproduct2 from '../../assets/specialproduct2.png';
import specialproduct3 from '../../assets/specialproduct3.png';
import specialproduct4 from '../../assets/specialproduct4.png';

const SpecialOffers = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='max-w-container mx-auto mt-[128px]'>
                    <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[48px]'>Special Offers</h2>
                    <div className='flex gap-x-10'>
                        <div className='w-1/4'>
                            <div className='relative z-100'>
                                <img className="" src={specialproduct1} alt="" />
                                <div className='w-[92px] font-DmSans text-white text-buttontextSize font-bold bg-primaryColor px-8 py-2 absolute top-5 left-5'>New</div>
                            </div>
                            <div className='flex justify-between mt-[18px] mb-[15px]'>
                                <h2 className='font-DmSans text-primaryColor text-productnameSize font-bold'>Basic Crew Neck Tee</h2>
                                <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>$44.00</p>
                            </div>
                            <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>Black</p>
                        </div>
                        <div className='w-1/4'>
                            <div className='relative'>
                                <img className='w-full' src={specialproduct2} alt="" />
                                <div className='w-[92px] font-DmSans text-white text-buttontextSize font-bold bg-primaryColor px-8 py-2 absolute top-5 left-5'>New</div>
                            </div>
                            <div className='flex justify-between mt-[18px] mb-[15px]'>
                                <h2 className='font-DmSans text-primaryColor text-productnameSize font-bold'>Basic Crew Neck Tee</h2>
                                <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>$44.00</p>
                            </div>
                            <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>Black</p>
                        </div>
                        <div className='w-1/4'>
                            <div className='relative'>
                                <img className='w-full' src={specialproduct3} alt="" />
                                <div className='w-[92px] font-DmSans text-white text-buttontextSize font-bold bg-primaryColor px-8 py-2 absolute top-5 left-5'>New</div>
                            </div>
                            <div className='flex justify-between mt-[18px] mb-[15px]'>
                                <h2 className='font-DmSans text-primaryColor text-productnameSize font-bold'>Basic Crew Neck Tee</h2>
                                <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>$44.00</p>
                            </div>
                            <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>Black</p>
                        </div>
                        <div className='w-1/4'>
                            <div className='relative'>
                                <img className='w-full' src={specialproduct4} alt="" />
                                <div className='w-[92px] font-DmSans text-white text-buttontextSize font-bold bg-primaryColor px-8 py-2 absolute top-5 left-5'>New</div>
                            </div>
                            <div className='flex justify-between mt-[18px] mb-[15px]'>
                                <h2 className='font-DmSans text-primaryColor text-productnameSize font-bold'>Basic Crew Neck Tee</h2>
                                <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>$44.00</p>
                            </div>
                            <p className='font-DmSans text-paragraphColor text-paragraphtextSize font-normal'>Black</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialOffers