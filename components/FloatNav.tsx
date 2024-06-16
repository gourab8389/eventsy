import React from 'react'
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdEvent } from "react-icons/md";

const FloatNav = () => {
  return (
    <div>
            <FloatingNav navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> },
          { name: 'About', link: '/about', icon: <FcAbout/> },
          { name: 'Event', link: '/events', icon: <MdEvent /> },
        ]} />
    </div>
  )
}

export default FloatNav
