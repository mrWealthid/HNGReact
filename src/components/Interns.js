import React from "react";
import Slide from "./Slide";
import InternContent from "./InternContent";

import classes from "./Intern.module.css";

const Interns = () => {
  //   const slider = function () {
  //     const slides = document.querySelectorAll(".slide");
  //     const btnLeft = document.querySelector(".sliderBtnLeft");
  //     const btnRight = document.querySelector(".sliderBtnRight");
  //     const dotContainer = document.querySelector(".dots");

  //     let curSlide = 0;
  //     const maxSlide = slides.length;

  //     // Functions
  //     const createDots = function () {
  //       slides.forEach(function (_, i) {
  //         dotContainer.insertAdjacentHTML(
  //           "beforeend",
  //           `<button class="dotsDot" data-slide="${i}"></button>`
  //         );
  //       });
  //     };

  //     const activateDot = function (slide) {
  //       document
  //         .querySelectorAll(".dotsDot")
  //         .forEach((dot) => dot.classList.remove("dotsDotActive"));

  //       document
  //         .querySelector(`.dotsDot[data-slide="${slide}"]`)
  //         .classList.add("dotsDotActive");
  //     };

  //     const goToSlide = function (slide) {
  //       slides.forEach(
  //         (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  //       );
  //     };

  //     // Next slide

  //     const nextSlide = function () {
  //       if (curSlide === maxSlide - 1) {
  //         curSlide = 0;
  //       } else {
  //         curSlide++;
  //       }

  //       goToSlide(curSlide);
  //       activateDot(curSlide);
  //     };

  //     const prevSlide = function () {
  //       if (curSlide === 0) {
  //         curSlide = maxSlide - 1;
  //       } else {
  //         curSlide--;
  //       }
  //       goToSlide(curSlide);
  //       activateDot(curSlide);
  //     };

  //     const init = function () {
  //       goToSlide(0);
  //       createDots();

  //       activateDot(0);
  //     };
  //     init();

  //     setInterval(nextSlide, 3000);

  //     // Event handlers
  //     btnRight.addEventListener("click", nextSlide);
  //     btnLeft.addEventListener("click", prevSlide);

  //     document.addEventListener("keydown", function (e) {
  //       if (e.key === "ArrowLeft") prevSlide();
  //       e.key === "ArrowRight" && nextSlide();
  //     });

  //     dotContainer.addEventListener("click", function (e) {
  //       if (e.target.classList.contains("dotsDot")) {
  //         const { slide } = e.target.dataset;
  //         goToSlide(slide);
  //         activateDot(slide);
  //       }
  //     });
  //   };
  //   slider();

  return (
    <>
      <InternContent />
      <div className={classes.slider}>
        <Slide />
      </div>
    </>
  );
};

export default Interns;
