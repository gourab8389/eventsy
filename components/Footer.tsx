import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full pt-5 pb-10 mb-[30px] md:mb-5' id='contact'>
            <div className="flex flex-col items-center text-white">
                <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple-500'>your</span>digital presence of next level </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out me today let&apos;s discuss how I can help to achive your goals.</p>
                <a href="mailto:deyg6988@gmail.com">
                    <MagicButton
                        title="Let's get a touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Gourab Dey</p>
                <div className="mt-2 flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <Link href={profile.link}>
                            <div key={profile.id} className="w-10  h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                <img src={profile.img} alt={String(profile.id)} width={20} height={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
