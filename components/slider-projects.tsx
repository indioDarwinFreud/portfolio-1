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
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
            }}
            

            freeMode={true}
            pagination={{
                clickable: true
            }}

            modules={[Pagination]}
            className="h-[500px] md:w-[850px] md:h-[520px] w-[330px] ">
            {dataProject.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className=" px-20 py-4 md:h-[520px] h-[500px]
                cursor-pointer bg-[rgba(0,0,0,0.17)] sm:flex-col gap-x-6 
                group hover:bg-[rgba(36,25,71,0.15)] 
                hover:border-secondary border-2 ">
                        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-1 ">
                            {item.name}
                            <span className="font-bold text-secondary">
                                {item.name2}
                            </span>
                        </h1>
                        <div className="w-full h-auto">
                            <img src={item.image} />
                        </div>
                        <p className="mb:3 text-xl text-gray-300">{item.description} </p>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderProject;