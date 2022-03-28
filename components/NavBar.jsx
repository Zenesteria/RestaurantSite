import Image from 'next/image'
import {FaBars, FaHome, FaBook, FaUser, FaInstagram, FaGithub, FaDiscord, FaPhone} from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NavBar = () => {
    const [display, setDisplay] = useState(false)
    const handleDisplay = () => {
        if(display){
            setDisplay(false)
        }
        else{
            setDisplay(true)
        }
    }
    const show = 'lg:hidden z-20 overflow-hidden  flex fixed bg-[#462963] right-0 top-0 w-[65vw] max-w-[300px] h-screen transition-all duration-700'
    const hidden = 'lg:hidden z-20 flex fixed bg-transparent right-0 top-0 w-0 max-w-[300px] h-screen transition-all duration-700'
    return(
        <div className="flex flex-col w-full h-fit items-center px-2 py-4 font-raleway ">
            
            <div className="flex w-full h-fit">
                <Link href='/' passHref>
                    <a className="flex h-fit items-center px-2 w-[20%] min-w-[200px] justify-center">
                        <Image src='/images/logo.png' width='40' height='44' alt=' '/>
                        <h1 className='ml-2 xl:text-[1.3rem] font-raleway'>Creatives Atlas</h1>
                    </a>
                </Link>

                <SubNav/>
                
                
                <FaBars className={(display ? 'text-white fixed right-[5px]' : '' )+' lg:hidden ml-auto mr-4 text-[1.5rem] z-30 cursor-pointer transition-all duration-300'} onClick={handleDisplay}/>
                <div className={display ? show : hidden}>
                    <MobileMenu innerDisplay={display ? 'flex':'hidden'}/>
                </div>
            </div>
            
                    
          

        </div>
    )
}

const NavLink = (props) => {
    const router = useRouter()
    return(
        <Link href={props.Href} passHref>
            <a className={(router.pathname === props.Href ?'active ': '') + 'flex justify-center items-center text-center px-2 py-1  hover:tracking-[0.2rem] transition-all duration-500'}>
                {props.name}
            </a>
        </Link>
    )
}
const MobileNavLink = (props) => {
    const router = useRouter()
    return(
        <Link href={props.linkPath} passHref>
            <a className={(router.pathname === props.linkPath ? "bg-[#8C77A0]" : "") + " flex items-center text-white px-2 rounded-xl w-[80%] h-[6vh] m-2 hover:bg-[#8C77A0] transition-all duration-300"}>
                <props.iconName className='text-[1.5rem] min-w-[30px]'/>
                <h1 className='m-2'>{props.linkName}</h1>
            </a>
        </Link>
    )
}

const MobileMenu = (props) => {
    return(
        <div className={props.innerDisplay+" w-[80%] m-auto h-[80%] flex-col justify-around items-center "}>
            <div className="flex flex-col  w-full h-fit">
                <h1 className=' text-[#A89AB5] mb-4'>Pages</h1>
                <MobileNavLink
                    linkPath='/'
                    iconName={FaHome}
                    linkName='Home'
                />
                <MobileNavLink
                    linkPath='/Portfolio'
                    iconName={FaBook}
                    linkName='Portfolio'
                />
                <MobileNavLink
                    linkPath='/About'
                    iconName={FaUser}
                    linkName='About'
                />
                <MobileNavLink
                    linkPath='/Contact'
                    iconName={FaPhone}
                    linkName='Contact Me'
                />
            </div>
            <div className="flex flex-col  w-full h-fit">
                <h1 className=' text-[#A89AB5] mb-2'>Socails</h1>
                <MobileNavLink
                    linkPath='https://www.instagram.com/creatives_atlas/'
                    iconName={FaInstagram}
                    linkName='@CreativesAtlas'
                />
                <MobileNavLink
                    linkPath='https://github.com/Zenesteria'
                    iconName={FaGithub}
                    linkName='Zenesteria'
                />
                <MobileNavLink
                    linkPath='https://discord.gg/G4DuWfZ5'
                    iconName={FaDiscord}
                    linkName='Abdurrahman'
                />
            </div>
        </div>
    )
}

const SubNav = () => {
    const router = useRouter()
    return(
        <div className="lg:flex w-full hidden">
            <div className="flex w-[40%] xl:text-[1rem] font-light mr-auto ">
                <NavLink
                    name='Home'
                    Href='/'
                />
                <NavLink
                    name='Portfolio'
                    Href='/Portfolio'
                />
                <NavLink
                    name='About'
                    Href='/About'
                />
                
            </div>


            
        </div>
    )
}


export default NavBar