// import { Separator } from "@heroui/react";
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Banner = () => {
   const slidesData = [
        {
            title: "Idea-Vault your Creative Repository",
            desc: "A modern web repository designed to securely store and organized and track your creative concepts, projects and inspiration.",
            bgImage: "/assets/banner.jpg",
             btn1Text: "Explore Now",
            btn1Link: "/explore",
            btn2Text: "View Idea",
            btn2Link: "/ideas"
        },
        {
            title: "Secure Your Innovative Minds",
            desc: "Keep your unique concepts protected and accessible anytime, anywhere with our robust architecture.",
            bgImage: "/assets/banner2.jpg",
                btn1Text: "Add New Idea",
            btn1Link: "/add-ideas",
            btn2Text: "Go to Profile",
            btn2Link: "/profile"
        },
        {
            title: "Track Your Project Progress",
            desc: "Organize your workflow and watch your simple ideas transform into fully production-ready projects.",
            bgImage: "/assets/banner3.jpg" ,
                btn1Text: "Gain ur knowledge",
            btn1Link: "/add-ideas",
            btn2Text: "Go to next",
            btn2Link: "/profile"
        }
    ];

  return (

<div className="w-full">
<Swiper
    pagination={{
        type: 'progressbar', 
    }}
    navigation={true} 
    autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
    }}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper">
                
{slidesData.map((slide, index) => (
    <SwiperSlide key={index}>
        <div 
          className="text-white flex justify-between flex-col items-center gap-5 h-118.5"
          style={{ 
              backgroundImage: `url('${slide.bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
          }}>
                        <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1 bg-black/40 w-full h-full"> 
                            <h1 className="text-7xl font-bold max-w-4xl">
                                {slide.title}
                            </h1>
                            
                            <p className="text-xl max-w-2xl">
                                {slide.desc}
                            </p>
                    
                           <div className="flex gap-5 mt-4">                               
                                    <Link href={slide.btn1Link}>
                                        <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer font-semibold rounded transition hover:bg-cyan-600">
                                            {slide.btn1Text}
                                        </button>
                                    </Link>

                                    
                                    <Link href={slide.btn2Link}>
                                        <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer font-semibold rounded transition hover:bg-white/70">
                                            {slide.btn2Text}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
    
//   );
// };

export default Banner;