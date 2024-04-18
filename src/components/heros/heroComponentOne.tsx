"use client";
import { useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import Swiper from "swiper";
import gsap from "gsap";
import {
  RiBarChartHorizontalLine,
  RiArrowDownSFill,
  RiSearchLine,
  RiArrowRightSFill,
  RiArrowLeftSFill,
} from "react-icons/ri";

export default function Hero() {
  useEffect(() => {
    const thumbs = new Swiper(".thumbs", {
      centeredSlidesBounds: true,
      slidesPerView: 2,
      direction: "horizontal",
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 20,
      speed: 1200,
    });

    const slider = new Swiper(".main-slider", {
      spaceBetween: 1000,
      initialSlide: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      speed: 2000,
      thumbs: {
        swiper: thumbs,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });

    gsap.from(".intro .slider-image", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    });

    gsap.from(".intro .main-slider-image", {
      y: 1000,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    });

    gsap.from(".intro h2", {
      y: 10,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1,
    });

    gsap.from(".thumbs .swiper-slide", {
      x: 1000,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1,
    });
  }, []);

  return (
    <main>
      <nav className="superHeroNav">
        <div className="logo">
          <Image
            src="/images/white-logo-spiderman.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="menu">
          <RiBarChartHorizontalLine />
        </div>
        <div className="flag">
          <Image src="/images/flag.png" alt="" width={100} height={100} />
          <RiArrowDownSFill />
          <div className="current">
            <span>ENG</span>
          </div>
        </div>
        <button>
          <RiSearchLine />
        </button>
      </nav>
      <div className="container">
        <div className="swiper thumbs">
          {/* <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="number">01</div>
              <Image
                src="/images/spiderman-mask.png"
                alt=""
                width={300}
                height={400}
                style={{ transform: "scale(1.5)" }}
                className="slider-image"
              />
            </div>
            <div className="swiper-slide">
              <div className="number">02</div>
              <Image
                src="/images/spiderman-handjpg.png"
                alt=""
                width={300}
                height={400}
                style={{ transform: "scale(1.5)" }}
                className="slider-image"
              />
            </div>
            <div className="swiper-slide">
              <div className="number">03</div>
              <Image
                src="/images/spiderman-helmet.png"
                alt=""
                width={300}
                height={400}
                style={{ transform: "scale(1.5)" }}
                className="slider-image"
              />
            </div>
          </div> */}
        </div>
        <div className="swiper main-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ background: "#3281c2" }}>
              <Image
                src="/images/spiderman-mask.png"
                alt=""
                width={500}
                height={600}
                style={{ transform: "scale(1.5)" }}
                className="main-slider-image"
              />
              <div className="text">
                <h2>SPIDER</h2>
                <h2>MAN</h2>
                <p>SUPERHERO</p>
              </div>
              <div className="spider">
                {/* Uncomment if needed */}
                {/* <Image
                  src="/images/pink-logo-spiderman.png"
                  alt=""
                  width={300}
                  height={400}
                  style={{
                    filter:
                      "invert(8%) sepia(55%) saturate(2056%) hue-rotate(196deg) brightness(95%) contrast(106%)",
                  }}
                  className="spider-image"
                /> */}
              </div>
            </div>
            <div className="swiper-slide intro">
              <Image
                src="/images/spiderman-handjpg.png"
                alt=""
                width={500}
                height={600}
                className="main-slider-image"
              />
              <div className="text">
                <h2>SPIDER</h2>
                <h2>MAN</h2>
                <p>SUPERHERO</p>
              </div>
              {/* Uncomment if needed */}
              {/* <div className="spider">
                <Image
                  src="/images/pink-logo-spiderman.png"
                  alt=""
                  width={300}
                  height={400}
                  className="spider-image"
                />
              </div> */}
            </div>
            <div className="swiper-slide" style={{ background: "#3281c2" }}>
              <Image
                src="/images/spiderman-helmet.png"
                alt=""
                width={500}
                height={600}
                style={{ transform: "scale(1.2)" }}
                className="main-slider-image"
              />
              <div className="text">
                <h2>SPIDER</h2>
                <h2>MAN</h2>
                <p>SUPERHERO</p>
              </div>
              {/* Uncomment if needed */}
              {/* <div className="spider">
                <Image
                  src="/images/pink-logo-spiderman.png"
                  alt=""
                  width={300}
                  height={400}
                  style={{
                    filter:
                      "invert(8%) sepia(55%) saturate(2056%) hue-rotate(196deg) brightness(95%) contrast(106%)",
                  }}
                  className="spider-image"
                />
              </div> */}
            </div>
          </div>
          <div className="swiper-button-next">
            <RiArrowRightSFill />
          </div>
          <div className="swiper-button-prev">
            <RiArrowLeftSFill />
          </div>
        </div>
      </div>
      <div className="socials">
        <a href="">FB</a>
        <a href="">YT</a>
        <a href="">TW</a>
      </div>
    </main>
  );
}
