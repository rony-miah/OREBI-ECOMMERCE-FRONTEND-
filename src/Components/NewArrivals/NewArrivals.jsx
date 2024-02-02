import React from 'react'
import newproduct1 from '../../assets/newproduct1.png';
import newproduct2 from '../../assets/newproduct2.png';
import newproduct3 from '../../assets/newproduct3.png';
import newproduct4 from '../../assets/newproduct4.png';

const NewArrivals = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='max-w-container mx-auto'>
                    <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[48px]'>New Arrivals</h2>
                    <div className='flex gap-x-10'>
                        <div className='w-1/4'>
                            <div className='relative'>
                                <img className='w-full' src={newproduct1} alt="" />
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
                                <img className='w-full' src={newproduct2} alt="" />
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
                                <img className='w-full' src={newproduct3} alt="" />
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
                                <img className='w-full' src={newproduct4} alt="" />
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

export default NewArrivals