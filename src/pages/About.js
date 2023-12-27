import React from "react";
import "./styles.css";
import AboutComponent from "./counterAbout";
export default function About() {
  return (
    <div
      style={{ backgroundImage: ` url(${`images/background.jpg`})` }}
      className=" h-full w-[100%] opacity-900 contrast-125 bg-cover "
    >
      <div className=" text-center ">
        <section id="abouts">
          <div className="  overflow-hidden w-[100%] h-full">
            <div className=" max-w-[1250px] z-10 mx-auto relative my-10 py-10  justify-center md:grid grid-cols-2 text-white">
              <div
                className="col-span-1 sm:w-[100%] w-[100%]  flex flex-col justify-center text-justify"
                data-aos="fade-right"
              >
                <h1 className="text-center text-amber-500  max-[600px]:mt-10 py-4 max-[600px]:text-5xl text-8xl">
                  About Us
                </h1>
                <p className="max-[600px]:text-sm p-4 flex flex-col justify-center  text-lg ">
                E-Summit BIT Mesra is one of the largest E-Summits of India. Entrepreneurship Development Cell at BIT Mesra aspires to inculcate the entrepreneurial environment in our country by creating an easily accessible set of resources and connecting people with an entrepreneurial mindset. It is organised with the vision of providing a platform that stimulates discussion on ideas that possess the potential to turn the issues troubling us into an opportunity to revolutionise the world.
                </p>
              </div>
              <div className=" col-span-1  text-justify flex flex-col justify-center p-2 font-bold">
                <AboutComponent />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
