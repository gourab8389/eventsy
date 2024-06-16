"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft} from '@/utils/motion'

const ColaborationText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-blue-700 text-3xl md:text-4xl lg:text-5xl font-bold  mt-[30px] text-center mb-[15px]'
            >
               Our Colaborations
            </motion.div>
        </div>
    )
}

export default ColaborationText