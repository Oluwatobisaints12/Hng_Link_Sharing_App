import React from 'react'
import Image from 'next/image'
import solarLinkImg from '../../public/solar_link-circle-bold.svg'
import devlinkIcon from '../../public/devlinks.svg'

const Header = () => {
  return (
    <header className='flex fllex-row gap-[7.5px] mx-[32px] mt-[32px]'>
      <Image
      src={solarLinkImg}
      width={40}
      height={40}
      alt='header solarlink Icon'
       />
         <Image
      src={devlinkIcon}
      width={136}
      height={27}
      alt='header devlink Icon'
       />
       
    </header>
  )
}

export default Header
