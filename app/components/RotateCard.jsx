"use client";

import React, { useRef } from "react";
import cardImage from "../../public/assets/images/image3.webp";
import cardImage2 from "../../public/assets/images/six.webp";
import imgOne from "../../public/assets/images/one.webp";
import imgTwo from "../../public/assets/images/two.webp";
import imgThree from "../../public/assets/images/three.webp";
import imgFour from "../../public/assets/images/four.webp";
import imgFive from "../../public/assets/images/five.webp";
import imgSeven from "../../public/assets/images/seven.webp";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RotateCard() {
  const sectionRef = useRef(null);
  const mainCardRef = useRef(null);
  const cardRef = useRef(null);
  const cardRef2 = useRef(null);

  // Refs for the 7 small images
  const smallImg1 = useRef(null);
  const smallImg2 = useRef(null);
  const smallImg3 = useRef(null);
  const smallImg4 = useRef(null);
  const smallImg5 = useRef(null);

  const smallImg7 = useRef(null);
  const textContent = useRef(null);

  useGSAP(
    () => {
      if (!mainCardRef.current) return;

      gsap.set(textContent.current, { opacity: "0" });

      // Set initial state for small images - centered, same size as main card, hidden
      gsap.set(
        [
          smallImg1.current,
          smallImg2.current,
          smallImg3.current,
          smallImg4.current,
          smallImg5.current,

          smallImg7.current,
        ],
        {
          width: "300px",
          height: "300px",
          top: "0",
          left: "0",
          opacity: 0, // Hidden initially
        },
      );

      // Create separate timelines for mobile and desktop
      let mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          let { isMobile, isDesktop } = context.conditions;

          const finalCardSize = mainCardRef.current.getBoundingClientRect();
          gsap.set(mainCardRef.current, {
            width: isMobile ? "88vw" : "70vw",
            height: isMobile ? "55vh" : "80vh",
          });

          const footer = document.querySelector("footer");
          const animationScroll = 3000;
          const overlapDistance = footer
            ? isMobile
              ? footer.offsetHeight * 0.5
              : footer.offsetHeight
            : window.innerHeight;
          const totalScroll = animationScroll + overlapDistance;
          const animationEndProgress = animationScroll / totalScroll;
          let pinSpacer = null;
          let spacerPadding = null;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${totalScroll}`, // Extended for more animations + footer overlap
              scrub: true,
              pin: true,
              onRefresh: (self) => {
                pinSpacer = self.pin?.parentNode ?? null;
                if (pinSpacer) {
                  spacerPadding =
                    window.getComputedStyle(pinSpacer).paddingBottom;
                }
              },
              onUpdate: (self) => {
                if (!pinSpacer || spacerPadding == null) return;
                if (self.progress < animationEndProgress) {
                  if (pinSpacer.style.paddingBottom !== spacerPadding) {
                    pinSpacer.style.paddingBottom = spacerPadding;
                  }
                } else if (pinSpacer.style.paddingBottom !== "0px") {
                  pinSpacer.style.paddingBottom = "0px";
                }
              },
            },
          });

          // Main card size expansion should be the first animation
          timeline.to(mainCardRef.current, {
            width: finalCardSize.width,
            height: finalCardSize.height,
            duration: 1,
          });

          // First card rotates from 0 to 180 degrees (disappears)
          timeline.fromTo(
            cardRef.current,
            {
              rotateY: 0,
            },
            {
              rotateY: 180,
              duration: 1,
            },
          );

          // Second card rotates from 180 to 360 degrees (appears and completes rotation)
          timeline.fromTo(
            cardRef2.current,
            {
              rotateY: 180,
            },
            {
              rotateY: 360,
              duration: 1,
            },
            "<",
          );

          // Make small images visible at their initial centered position - AFTER rotation completes
          timeline.to(
            [
              smallImg1.current,
              smallImg2.current,
              smallImg3.current,
              smallImg4.current,
              smallImg5.current,
              smallImg7.current,
            ],
            {
              opacity: 1,
              duration: 0.3,
            },
          );

          // NOW all images shrink and move to their final positions SIMULTANEOUSLY

          // Main card shrinks and moves to center position
          timeline.to(
            cardRef2.current,
            {
              width: "100px",
              height: "100px",
              top: "120%",
              left: "60%",
              x: "-50%",
              y: "-50%",
              duration: 1,
            },
            "<",
          );

          timeline.to(
            textContent.current,

            {
              opacity: "1",
              duration: 1,
            },
            "-=1.5",
          );

          // Small image 1 - top left (FIXED POSITION)
          timeline.to(
            smallImg1.current,
            {
              width: "100px",
              height: "100px",
              top: "-100px",
              left: "5%",
              duration: 1,
            },
            "<",
          );

          // Small image 2 - top right (FIXED POSITION)
          timeline.to(
            smallImg2.current,
            {
              width: "100px",
              height: "100px",
              top: "30px",
              left: "13%",
              duration: 1,
            },
            "<",
          );

          // Small image 3 - bottom left (FIXED POSITION)
          timeline.to(
            smallImg3.current,
            {
              width: "100px",
              height: "100px",
              top: "-60px",
              left: "33%",
              duration: 1,
            },
            "<",
          );

          // Small image 4 - random position
          timeline.to(
            smallImg4.current,
            {
              width: "100px",
              height: "100px",
              top: "80%",
              left: "70%",
              duration: 1,
            },
            "<",
          );

          // Small image 5 - top right
          timeline.to(
            smallImg5.current,
            {
              width: "100px",
              height: "100px",
              top: "-20px",
              left: "72%",
              duration: 1,
            },
            "<",
          );

          // Small image 6 - bottom right

          // Small image 7 - bottom position (mirrors image 3)
          timeline.to(
            smallImg7.current,
            {
              width: "100px",
              height: "100px",
              top: "130%",
              left: "15%",
              duration: 1,
            },
            "<",
          );
          const animationDuration = timeline.duration();
          const holdDuration =
            animationDuration * (overlapDistance / animationScroll);
          timeline.to({}, { duration: holdDuration });

          return () => {
            if (pinSpacer && spacerPadding != null) {
              pinSpacer.style.paddingBottom = spacerPadding;
            }
          };
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-red-900 flex items-center justify-center relative perspective-distant"
    >
      <div
        // this should be the first animation
        // initial width and height should be w-[70vw] h-[80vh]
        // final size should be responsive: w-[85vw] h-[60vw] on mobile, w-125 h-75 on desktop
        ref={mainCardRef}
        className="relative w-[85vw] h-[60vw] sm:w-125 sm:h-75"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 7 Small Images - Start centered behind main card (z-30) */}
        <div
          ref={smallImg1}
          className="absolute inset-0 z-30"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imgOne}
            alt="Small 1"
            fill
            className="object-cover rounded-xs "
          />
        </div>

        <div
          ref={smallImg2}
          className="absolute inset-0 z-33"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imgTwo}
            alt="Small 2"
            fill
            className="object-cover rounded-xs "
          />
        </div>

        <div
          ref={smallImg3}
          className="absolute inset-0 z-34"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imgThree}
            alt="Small 3"
            fill
            className="object-cover rounded-xs "
          />
        </div>

        <div
          ref={smallImg4}
          className="absolute inset-0 z-32"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imgFour}
            alt="Small 4"
            fill
            className="object-cover rounded-xs "
          />
        </div>

        <div
          ref={smallImg5}
          className="absolute inset-0 z-35"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imgFive}
            alt="Small 5"
            fill
            className="object-cover rounded-xs "
          />
        </div>

        <div
          ref={smallImg7}
          className="absolute inset-0 z-40"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={imgSeven}
            alt="Small 7"
            fill
            className="object-cover rounded-xs "
          />
        </div>

        {/* First Card */}
        <div
          ref={cardRef}
          className="absolute inset-0 z-40 w-full h-full backface-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image src={cardImage} alt="Card 1" fill className="object-cover " />
        </div>

        {/* Second Card */}
        <div
          ref={cardRef2}
          className="absolute inset-0 z-40 w-full h-full backface-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={cardImage2}
            alt="Card 2"
            fill
            className="object-cover  "
          />
        </div>
      </div>

      <div
        ref={textContent}
        className="absolute top-1/2 transform -translate-y-1/2 mt-14 w-[90%] mx-auto text-center text-xs lg:text-sm z-50"
      >
        <p className="lg:max-w-105 text-center mx-auto lg:mt-9">
          Cercli unifies HR, payroll, and compliance for MENA teams, with
          global-ready contractor support and real-time reporting.
        </p>
        <button className="bg-white rounded-xs mt-1 py-1 px-3 text-center text-black/50">
          BOOK A DEMO
        </button>
      </div>
    </section>
  );
}

export default RotateCard;
