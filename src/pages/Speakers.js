import swipers from "./speaker/Swipers";
import React from "react";
import Carousel from "./Carousel";

import Swipers from "./speaker/Swipers";

import styled from "styled-components";

import a from "../assets/1.jpeg";
import b from "../assets/2.jpeg";
import c from "../assets/3.jpeg";
import d from "../assets/4.jpeg";
import e from "../assets/5.jpeg";

import h from "../assets/8.jpeg";
import i from "../assets/9.jpeg";

import "./styles.css";
import Carousel1 from "./Carousel1";

export default function Speakers() {
  return (
    <>
      <div className="  overflow-hidden  ">
        <div
          style={{ backgroundImage: ` url(${`images/bg.jpg`})` }}
          className=" h-full w-[100%] bg-cover"
        >
          <div className="py-6">
            <h1 className=" text-center pt-20  mb-8 font-bold lg:text-5xl text-3xl font-Orbitron text-amber-500">
              Current Speakers
            </h1>
          </div>

          <section className="">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">

              <div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img
                    class="imgg"
                    className="mb-8 brightness-100 imgg"
                    src={i}
                    alt=""
                  />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-2xl justify-center ">
                      <div className=" text-amber-500 font-Orbitron font-black px-5 inline-block">
                        RAHUL ANAND
                      </div>
                    </div>
                    <div className="text-lg text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">
                        MASTERCLASS: GET YOUR DREAM BSCHOOL
                      </h1>

                      <div className="p-5 text-md">22th January 1:30 P.M.</div>
                      <div className="text-md">CAT HALL</div>
                    </div>
                  </div>
                </div>

                

                <div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img
                    class="imgg"
                    className="mb-8 brightness-150 imgg"
                    src={b}
                    alt=""
                  />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-xl justify-center ">
                      <div className=" text-amber-500 font-Orbitron font-black px-5 inline-block">
                        ANSHUL RUSTAGGI
                      </div>
                    </div>
                    <div className="text-lg text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">
                        NFT (New Financial Trajectory)
                      </h1>

                      <div className="p-5 text-md">27th January 6:30 P.M.</div>
                      <div className="text-md">CAT HALL</div>
                    </div>
                  </div>
                </div>

                <div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img
                    class="imgg"
                    className="mb-8 brightness-150 imgg"
                    src={c}
                    alt=""
                  />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-2xl justify-center ">
                      <div className=" text-amber-500 font-Orbitron font-black px-5 inline-block">
                        PRATIK GAURI
                      </div>
                    </div>
                    <div className="text-lg text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">
                        INNOVATING EDUCATION with Web 3.0.
                      </h1>

                      <div className="p-5 text-md">28th January 10:00 A.M.</div>
                      <div className="text-md">MS TEAMS</div>
                    </div>
                  </div>
                </div>

                <div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img
                    class="imgg"
                    className="mb-8 brightness-100 imgg"
                    src={d}
                    alt=""
                  />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-2xl justify-center ">
                      <div className=" text-amber-500 font-Orbitron font-black px-5 inline-block">
                        RISHABH JAIN
                      </div>
                    </div>
                    <div className="text-lg text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">FIRESIDE CHAT</h1>

                      <div className="p-5 text-md">28th January 2:30 P.M.</div>
                      <div className="text-md">CAT HALL</div>
                    </div>
                  </div>
                </div>

                <div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img
                    class="imgg"
                    className="mb-8 brightness-150 imgg"
                    src={e}
                    alt=""
                  />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-2xl justify-center ">
                      <div className=" text-amber-500 font-Orbitron font-black px-5 inline-block">
                        ANMOL SHARMA
                      </div>
                    </div>
                    <div className="text-lg text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">
                        THE PERFECT RECIPE FOR AN ENTERPRENEUR
                      </h1>

                      <div className="p-5 text-md">29th January 6 P.M.</div>
                      <div className="text-md">LECTURE HALL</div>
                    </div>
                  </div>
                </div>

                <div className="bg-inherit  shadow-1 p-5 rounded- rounded-tl-[100px]  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img
                    class="imgg"
                    className="mb-8 w-full brightness-150   imgg "
                    src={a}
                    alt=""
                  />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-2xl justify-center ">
                      <div className=" text-amber-500 text font-Orbitron font-black px-5 inline-block">
                        ADITYA ARORA
                      </div>
                    </div>
                    <div className="text-lg text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">
                        STARTUPS IN THE AGE OF RECESSION{" "}
                      </h1>

                      <div className="p-5 text-md">29th January 2:30 P.M.</div>
                      <div className="text-md">LECTURE HALL</div>
                    </div>
                  </div>
                </div>

                <div className="bg-inherit shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                  <img class="imgg" className="mb-10 imgg" src={h} alt="" />
                  <div className="border-b-4 border-t-4 border-b-amber-500 border-t-amber-500  p-4">
                    <div className="mb-4 flex gap-x-2 text-2xl justify-center ">
                      <div className=" text-amber-500 font-Orbitron font-black px-5 inline-block">
                        ADITYA RANJAN
                      </div>
                    </div>
                    <div className="  text-center text-white font-semibold ">
                      <h1 className="text-amber-500 text-xl">
                        ASPIRANT TO ADMINISTRATOR JOURNEY OF AN IAS
                      </h1>

                      <div className="p-5 text-md">29th January 12:30 P.M.</div>
                      <div className="text-md">SEMINAR HALL-1</div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </section>
          <div className="py-6">
            <h1 className="text-amber-500 text-center pt-20  mb-8 font-bold lg:text-5xl text-3xl font-Orbitron text-amber-500">
              Past Speakers
            </h1>
          </div>
          <Carousel1 />
        </div>
      </div>
    </>
  );
}

const Oval = styled.div`
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
`;
