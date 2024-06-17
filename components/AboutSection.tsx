"use client"
import { slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='items-center justify-center flex flex-col mt-2 mx-4 pt-2 lg:pt-40'>
      <h1 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold cursor-pointer mt-4'>
        Our
        <span className='text-purple-500 hover:text-white cursor-pointer'>Services</span>
      </h1>
      <p className='text-white text-sm md:text-xl lg:text-2xl mt-4 px-10 lg:px-20'>
      Welcome to Prime Services, your trusted partner for comprehensive solutions tailored to meet your unique needs. We are a team of dedicated professionals committed to delivering exceptional services across a wide range of industries. With years of experience and a passion for excellence, we aim to provide unparalleled support to help you achieve your goals.
      </p>
      <p className='text-white text-sm md:text-xl lg:text-2xl mt-4 px-10 lg:px-20'>At Prime Services, our mission is to offer top-notch services that exceed our clients' expectations. We strive to build long-lasting relationships based on trust, integrity, and superior performance. Our goal is to be the go-to service provider, known for our reliability and customer-centric approach.</p>
      
    </div>
  )
}

export default AboutSection
