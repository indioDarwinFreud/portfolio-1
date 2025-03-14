"use client"

import { dataProject } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderProject = () => {
    return (
        <Swiper
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 15
            },
        }}
        centeredSlides={true} // Centrar el slide activo
      
        freeMode={true}
        pagination={{
            clickable: true
        }}
        
        modules={[Pagination]}
        className="h-[500px] md:w-[850px]">
        {dataProject.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="flex px-20 py-4 h-auto md:h-[500px] rounded-lg 
                cursor-pointer bg-[rgba(0,0,0,0.17)] sm:flex-col gap-x-6 sm:gap-x-0 
                group hover:bg-[rgba(36,25,71,0.15)] transition-all duration-300 
                hover:border-secondary border-2">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            {item.name}
                            <span className="font-bold text-secondary"> 
                                {item.name2}
                            </span>
                        </h1>
                        <img src={item.image} />
                        <p className="text-xl">{item.description}</p>
                    </div>
                
            </SwiperSlide>
        ))}
        </Swiper>
    )
}

export default SliderProject;