import React, { useEffect } from "react";
// import Header from "../components/Header";
// import iibg from "../assets/bg/bg.jpg";
// import iiibg from "../assets/bg/bg.jpg";
import Swiper from "swiper";
import "swiper/css";
import SponsorBox from "../pages/Sponsors/Sponsor";
import styled from "styled-components";
import {
  NewSponsors,
  TitleSponsor,
  copreSponsor,
  associationSponsor,
  investSponsor,
  mediaSponsor,
  gameSponsor,
  learnSponosor,
  startSponsor,
  copowSponsor,
} from "./data";
import {
  sponsors,
  TitleSponsor1,
  copreSponsor1,
  associationSponsor1,
  mediaSponsor1,
  learnSponosor1,
  startSponsor1,
  copowSponsor1,
  industrialSponsor,
} from "../utils/Sponsors23";
import PastCard from "../components/PastCard";

import YouthIncorporated from '../assets/newSponsors/YouthIncorporated.png'
import InterviewBuddy from '../assets/newSponsors/InterviewBuddy.png'
import DUBeat from '../assets/newSponsors/DU Beat - An Independent Student Newspaper.jpg'
import StartupStartkaro from '../assets/newSponsors/startupstartkaro-logo.png'
import Finstreet from '../assets/newSponsors/FinSTREET.jpg'
import CampusTimePune from '../assets/newSponsors/campus time pune.png'
import MFL_Educlub from '../assets/newSponsors/MFL Educlub.png'
import LearningWhileTravelling from '../assets/newSponsors/Learning While Travelling.png'
import GrowthSchool from '../assets/newSponsors/GrowthSchool3.png'
import PokerStreet from '../assets/newSponsors/Pokerstreet.jpg'
import Dare2Compete from '../assets/newSponsors/dare2Compete.jpg'
import BlueHillPublication from '../assets/newSponsors/BlueHillPublication.png'
import HPCL from '../assets/newSponsors/HPCL.jpg'
import YesStartups from '../assets/newSponsors/YESSTARTUP.png'
import Edufabrica from '../assets/newSponsors/EDUFABRICA.jpeg'
import AngelOne from '../assets/newSponsors/AngelOne.png'
import Codingal from '../assets/newSponsors/Codingal.jpg'
import Rapido from '../assets/newSponsors/Rapido.png'
import NoticeBard from '../assets/newSponsors/NoticeBard.png'
import IndianAcademyofEntrepreneurship from '../assets/newSponsors/Indian Academy of Entrepreneurship.jpeg'
import GrabOn from '../assets/newSponsors/GrabOn.png'
import CodingNinjas from '../assets/newSponsors/CodingNinjas.svg'
import BadeLog from '../assets/newSponsors/BadeLog.jpeg'
import RadioCity from '../assets/newSponsors/RadioCity.jpg'
import Hiralal from '../assets/newSponsors/Hiralal.jpeg'
import gfg from '../assets/newSponsors/gfg.png'
import SahiCoin from '../assets/newSponsors/SahiCoin.svg'
import custkart from '../assets/newSponsors/custkart.png'
import pizzahut from '../assets/newSponsors/pizzahut.png'
import stockedge from '../assets/newSponsors/stockedge.jpg'
import xvc from '../assets/newSponsors/100xvc.png'
import devtown from '../assets/newSponsors/devtown.svg'
import Karostartup from '../assets/newSponsors/KaroStartup.jpg'
import yhills from "../assets/newSponsors/YHills.png"
import swiftskill from "../assets/newSponsors/swiftskills.png"
import startuplab from "../assets/newSponsors/Thestartuplab.png"
import gather from "../assets/newSponsors/Gather.png"
import certificate from "../assets/newSponsors/Givemycertificate.png"
import ekcle from "../assets/newSponsors/Ekcleventures.png"
import urbanBrava from "../assets/newSponsors/urbanBrava.png"
import gdsc from "../assets/newSponsors/gdsc.png"
import devdun from "../assets/newSponsors/devdun.png"
import rubrix from "../assets/newSponsors/rubrix.png"
import puma from "../assets/newSponsors/puma.png"
import lawyered from "../assets/newSponsors/lawyered.png"
import myways from '../assets/sponsors/Myways.png'
import floxus from '../assets/sponsors/floxus.png'
import fincess from "../assets/newSponsors/fincess.png"
import indibni from "../assets/newSponsors/indibni.jpeg"
import startupEd from "../assets/newSponsors/startupEd.png"



const Sponsors = ({ data }) => {
 

  
  useEffect(()=>{
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2000,
      },
  
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }, [])
  useEffect(()=>{
    var swiper = new Swiper(".people-carousel", {
      effect: "swipe",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 1000,
      },
    });
  }, [])

  return (
    <>
      <div className="  overflow-hidden  ">
        <div
          style={{ backgroundImage: ` url(${`images/bg.jpg`})` }}
          className=" h-full w-[100%] bg-cover"
        >
          <div className="pt-8">
            <SectionContainer id="sponsors">
              <Heading>Our Sponsors</Heading>
              <SponsorHeading>Title Sponsor</SponsorHeading>
              <EventsContainer>
                {TitleSponsor1.map((sponsor) => {
                  return <SponsorBox data={sponsor} />;
                })}
              </EventsContainer>

              <div className="flex md:flex-row flex-col justify-evenly items-center">
                <div className="flex flex-col">
                  <SponsorHeading>Co-Presented By</SponsorHeading>
                  <EventsContainer>
                    {copreSponsor1.map((sponsor) => {
                      return <SponsorBox data={sponsor} />;
                    })}
                  </EventsContainer>
                </div>
                <div className="flex flex-col ">
                  <SponsorHeading>In Association with</SponsorHeading>
                  <EventsContainer>
                    {associationSponsor1.map((sponsor) => {
                      return <SponsorBox data={sponsor} />;
                    })}
                  </EventsContainer>
                </div>
                <div className="flex flex-col">
                  <SponsorHeading>Co-Powered By</SponsorHeading>
                  <EventsContainer>
                    {copowSponsor1.map((sponsor) => {
                      return <SponsorBox data={sponsor} />;
                    })}
                  </EventsContainer>
                </div>
              </div>

              <EventsContainer></EventsContainer>

              <SponsorHeading>Industrial Partner</SponsorHeading>
              <EventsContainer>
                {industrialSponsor.map((sponsor) => {
                  return <SponsorBox data={sponsor} />;
                })}
              </EventsContainer>

              <SponsorHeading>Media Partners</SponsorHeading>
              <EventsContainer>
                {mediaSponsor1.map((sponsor) => {
                  return <SponsorBox data={sponsor} />;
                })}
              </EventsContainer>
              <SponsorHeading>Learning Partners</SponsorHeading>
              <EventsContainer>
                {learnSponosor1.map((sponsor) => {
                  return <SponsorBox data={sponsor} />;
                })}
              </EventsContainer>
              <SponsorHeading>Startup growth partner</SponsorHeading>
              <EventsContainer>
                {startSponsor1.map((sponsor) => {
                  return <SponsorBox data={sponsor} />;
                })}
              </EventsContainer>
              <SponsorHeading>All Sponsors</SponsorHeading>
              <EventsContainer>
                {sponsors.map((sponsor) => {
                  return <SponsorBox data={sponsor} />;
                })}
              </EventsContainer>


            </SectionContainer>
          </div>
          <div class="startup-container">
          <h1 className="text-[30px] font-Orbitron text-center text-amber-500" data-aos="fade-up" data-aos-easing="ease">
            Previous Sponsors
          </h1>
          <div class="people-container">
            <div class="people-carousel">
              <div class="swiper-wrapper">
                <PastCard pic = {AngelOne}/>
                <PastCard pic = {HPCL}/>
                <PastCard pic = {gfg}/>
                <PastCard pic = {Finstreet}/>
                <PastCard pic = {YouthIncorporated}/>
                <PastCard pic = {pizzahut}/>
                <PastCard pic = {RadioCity}/>
                <PastCard pic = {InterviewBuddy}/>
                <PastCard pic = {DUBeat}/>
                <PastCard pic = {StartupStartkaro}/>
                <PastCard pic = {CampusTimePune}/>
                <PastCard pic = {BlueHillPublication}/>
                <PastCard pic = {MFL_Educlub}/>
                <PastCard pic = {LearningWhileTravelling}/>
                <PastCard pic = {GrowthSchool}/>
                <PastCard pic = {PokerStreet}/>
                <PastCard pic = {Dare2Compete}/>
                <PastCard pic = {YesStartups}/>
                <PastCard pic = {Edufabrica}/>
                <PastCard pic = {Codingal}/>
                <PastCard pic = {Rapido}/>
                <PastCard pic = {NoticeBard}/>
                <PastCard pic = {IndianAcademyofEntrepreneurship}/>
                <PastCard pic = {GrabOn}/>
                <PastCard pic = {CodingNinjas}/>
                <PastCard pic = {BadeLog}/>
                <PastCard pic = {Hiralal}/>
                <PastCard pic = {SahiCoin}/>
                <PastCard pic = {custkart}/>
                <PastCard pic = {stockedge}/>
                <PastCard pic = {xvc}/>
                <PastCard pic = {devtown}/>
                <PastCard pic = {Karostartup}/>
                <PastCard pic = {yhills}/>
                <PastCard pic = {swiftskill}/>
                <PastCard pic = {startuplab}/>
                <PastCard pic = {gather}/>
                <PastCard pic = {certificate}/>
                <PastCard pic = {ekcle}/>
                <PastCard pic = {urbanBrava}/>
                <PastCard pic = {gdsc}/>
                <PastCard pic = {devdun}/>
                <PastCard pic = {rubrix}/>
                <PastCard pic = {puma}/>
                <PastCard pic = {lawyered}/>
                <PastCard pic = {myways}/>
                <PastCard pic = {floxus}/>
                <PastCard pic = {fincess}/>
                <PastCard pic = {indibni}/>
                <PastCard pic = {startupEd}/>
                
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Sponsors;

const SectionContainer = styled.div`
  padding: 50px 0px 100px 0px;
  @media screen and (max-width: 800px) {
    padding: 50px 0px 50px 0px;
    text-align: left;
    border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
  }
  text-align: center;
  font-weight: 900;
`;

const Heading = styled.h1`
  display: block;
  background-image: linear-gradient(
    to right,
    #ffc107,
    #ffc107,
    #ffc107,
    #ffbf00,
    #ffbf00
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 56px;
  padding-bottom: 50px;
  text-align: center;
  font-family: Orbitron;
  font-weight: 900;
`;

const SponsorHeading = styled.h1`
  display: block;
  background-image: linear-gradient(
    to right,
    #ffc107,
    #ffc107,
    #ffc107,
    #ffc107,
    #ffc107
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  font-size: 24px;
  text-align: center;
`;
//background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: ${(props) => {
    if (props.back) {
      return "20px";
    } else {
      return "20px 0px 30px 0px";
    }
  }};
  background-color: ${(props) => {
    if (props.back) {
      return "#151629";
    } else {
      return "rgba(0,0,0,0)";
    }
  }};
`;
