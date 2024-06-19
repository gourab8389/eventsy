import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3d-pin'
import { colabProjects } from '@/data'


const CollabProjects = () => {
  return (
    <div className="py-20  text-center h-auto" id='projects'>
      <h1 className="heading text-3xl text-white font-bold lg:text-6xl mt-5 lg:mt-8">
        Colaborating
        <span className="text-purple-500"> projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-between p-4 gap-16 lg:gap-5 mt-10 lg:mt-5 lg:mx-10">
        {colabProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[15vh] lg:h-[30vh] mb-5">
                <div
                  className="flex w-full h-full lg:rounded-3xl"
                  // style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-5 absolute bottom-0 rounded-md"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              {/* <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.des}
            </p> */}

              <div className="flex items-center justify-between mt-6 mb-2">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center bg-gradient-to-tr from-teal-300 to-red-300 p-2 rounded-md border border-blue-300">
                  <p className="flex lg:text-xl md:text-xs text-sm text-white">
                    Check Live Site
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollabProjects
