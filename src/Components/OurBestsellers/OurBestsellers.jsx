import React from 'react';
import bestproduct1 from '../../assets/bestproduct1.png';
import bestproduct2 from '../../assets/bestproduct2.png';
import bestproduct3 from '../../assets/bestproduct3.png';
import bestproduct4 from '../../assets/bestproduct4.png';

const OurBestsellers = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='max-w-container mx-auto mt-[118px]'>
                    <h2 className='font-DmSans text-primaryColor text-heading2textSize font-bold mb-[48px]'>Our Bestsellers</h2>
                    <div className='flex gap-x-10'>
                        <div className='w-1/4'>
                            <div className='relative z-100'>
                                
                                    <img className="" src={bestproduct1} alt="" />
                                    {/* before:content: [''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-red-500 before:z-0 */}
                                    {/* <div className=' object-right-bottom bg-yellow-300 w-24 h-24'>
                                        <h4>iooijw</h4>
                                        <p>dfjld</p>
                                    </div> */}
                              
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
                                <img className='w-full' src={bestproduct2} alt="" />
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
                                <img className='w-full' src={bestproduct3} alt="" />
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
                                <img className='w-full' src={bestproduct4} alt="" />
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

export default OurBestsellers