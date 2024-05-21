"use client";
import { useState } from "react";
import Features from "./(components)/features";
import CtaButton from "./(components)/button";

export default function Home() {
  const benefits = [
    {
      title: "Planning for pregnancy",
      benefit:
        "Eva is your key to a successful conception journey, offering fertility insights, personalized nutrition, and a clear roadmap for family planning.",
    },
    {
      title: "Understanding Fertility",
      benefit:
        "Dive into fertility fundamentals with Eva's guide, addressing common issues and providing actionable solutions, putting you in control of your fertility journey.",
    },
    {
      title: "Guide to a Healthy Pregnancy",
      benefit:
        "Join Eva's Prenatal Care Program for personalized guidance on essential medical care, balanced nutrition, and expert advice to ensure a thriving and comfortable pregnancy.",
    },
    {
      title: "Preparing for the Birth",
      benefit:
        "Craft your personalized birth plan with Eva's toolkit, equip yourself with childbirth education resources, and be confidently prepared for the big day.",
    },
    {
      title: "Mental Wellbeing During Pregnancy",
      benefit:
        "Prioritize emotional well-being with Eva's support, offering stress management techniques, counseling resources, and a supportive community for a positive pregnancy experience.",
    },
    {
      title: "Your Baby After the Birth",
      benefit:
        "Navigate postpartum recovery seamlessly with Eva's care plan, receive essential newborn care insights, and access ongoing parenting support for a harmonious journey into parenthood.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabChange = (direction) => {
    if (direction === "forward") {
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, benefits.length - 1)
      );
    } else if (direction === "backward") {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };
  return (
    <div className="">
      <main className="min-h-screen flex-col items-center justify-between bg-secondary">
        <section className="py-12  bg-cover hero bg-center lg:bg-top min-h-screen flex flex-col items-start justify-center gap-5 container mx-auto px-5 lg:px-20">
        <h1 className="hero-title text-primary mb-5 text-start lg:max-w-[50%] lg:mt-28">
                Your preferred partner in managing your entire HR cycle
              </h1>
              <a
           href="/consultation"
            className="uppercase px-4 py-2 text-sm font-medium  text-center text-primary transition-colors duration-150 bg-tranparent border-2 border-primary rounded-lg active:bg-primary hover:bg-primary focus:outline-none focus:shadow-outline-purple"
          >
            BOOK A CONSULTATION
          </a>
        </section>
        <section className="py-10" id="about">
          <h1 className="section-title text-dark mb-5 text-center lg:max-w-[80%] mx-auto">
            Evacare’s pioneering virtual care model is built around women and
            families, delivering better outcomes and lower costs for everyone.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 py-10">
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/3.svg"></img>
              <h2 className="text-dark text-2xl">Whole-person care</h2>
              <p className="text-md text-dim text-center">
                A holistic approach that offers comprehensive care for all
                families.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/2.svg"></img>
              <h2 className="text-dark text-2xl">Technology-first approach</h2>
              <p className="text-md text-dim text-center">
                We use AI and data-driven insights deliver better health
                outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src="/icons/1.svg"></img>
              <h2 className="text-dark text-2xl">Lower Costs</h2>
              <p className="text-md text-dim text-center">
                Proactive intervention reduces the need for costly procedures.
              </p>
            </div>
          </div>
        </section>
        <section className="benefits bg-cover bg-center min-h-screen rounded-lg flex items-center justify-start">
          <div className="bg-primary p-10 lg:basis-1/2 rounded-r-lg space-y-5">
            <h2 className="section-title text-white">
              {benefits[activeIndex].title}
            </h2>
            <p className="text-dim-gray text-lg">
              {benefits[activeIndex].benefit}
            </p>
            <a
              className="underline text-white text-md capitalize mt-5"
              href="#"
            >
              Get Started
            </a>
            <div className="flex gap-3 text-white text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-10 h-10 ${
                  activeIndex === 0 ? "text-gray-400" : ""
                }`}
                onClick={() => handleTabChange("backward")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-10 h-10 ${
                  activeIndex === benefits.length - 1 ? "text-gray-400" : ""
                }`}
                onClick={() => handleTabChange("forward")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </section>
        <Features />
      </main>
    </div>
  );
}
