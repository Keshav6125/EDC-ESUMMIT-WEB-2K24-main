// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";





import aman from "../assets/amanDhat.jpeg";


import anand from "../assets/anand.jpeg";
import sanjeev from "../assets/sanjeev.jpeg";
import abhinav from "../assets/abhinav.jpeg";
import pawan from "../assets/pawanKumar.jpeg";
import vineet from "../assets/vineet.jpeg";
import ayush from "../assets/ayush.jpeg";
import sridher from "../assets/sridher.jpeg";
import richa from "../assets/richa.jpeg";

export default function Carousel1() {
  return (
    <>
   
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className=" ">
        <SwiperSlide >
          < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={aman}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">  Aman Dhattarwal</h1>
             <p className="text-sm">YOUTUBER</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img class="past" className="col-span-1 rounded-2xl border-2 " src={anand}/>
          <div className="col-span-1 text-white " >
             <h1 className="text-amber-500 font-bold text-2xl"> Anand Verma</h1>
             <p className="text-sm"> Founder- fasal, Forbes 30 under 30</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 p-5 ">
          <img className="col-span-1 rounded-2xl border-2  " src={sanjeev}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">Sanjeev Mohanty Challenge</h1>
             <p className="text-sm">MD- Levi Strauss & Co.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={abhinav}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">Abhinav Sinha</h1>
             <p className="text-sm">Co-founder- Eko</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={pawan}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">Pawan Kumar Rai</h1>
             <p className="text-sm">Co-founder- Finshots, Ditto</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={vineet}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">Vineet Barnwal</h1>
             <p className="text-sm">India's leading campus trainer & coach</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={ayush}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl"> Ayush Jaiswal</h1>
             <p className="text-sm">Founder- Pesto</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={sridher}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">Sridher Jeyachandran</h1>
             <p className="text-sm">Co-founder- Crio.do</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        < div className="grid grid cols-2 ">
          <img className="col-span-1 rounded-2xl border-2" src={richa}/>
          <div className="col-span-1 text-white rounded-2xl" >
             <h1 className="text-amber-500 font-bold text-2xl">Richa Shrivastava</h1>
             <p className="text-sm">Managing Partner, Maker's Asylum</p>
          </div>
          </div>
        </SwiperSlide>
       
        
     
        

        </div>
      </Swiper>
      
    </>
  );
}
