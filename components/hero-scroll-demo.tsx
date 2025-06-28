"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to My <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/profile-photo.jpg"
              alt="Ansh Agarwal - Portfolio"
              fill
              className="object-cover object-center"
              draggable={false}
            />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Ansh Agarwal</h3>
            <p className="text-sm md:text-base text-gray-600">Computer Science Engineer</p>
            <p className="text-xs md:text-sm text-gray-500">MERN Stack • GenAI • Machine Learning</p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}