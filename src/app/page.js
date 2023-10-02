'use client'
import Image from 'next/image'
import NavBar from '../components/NavBar.js'
import '../styles/globals.css'
import getLink from './functions/getLink.js'
import getCategory from './functions/getCategory.js'
import { BiBrain } from 'react-icons/bi';
import { FaLightbulb } from 'react-icons/fa';
import { AiFillTool } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsFillDatabaseFill } from 'react-icons/bs';
import { FaAtom } from 'react-icons/fa';
import Link from 'next/link.js'
import StickyBar from "@/components/StickyBar.js"
import { useState } from 'react'


export default function Home() {
  const handleMouseEnter = (text) => {
    setText(text)
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  const [opacity,setOpacity] = useState(0)
  const [text,setText]=useState("dummy text")
  var repeat = [1,2,3,4,5,6]
  return (
    <main>
      <NavBar/>
      <div className='bigContainer'>
        <div className='fullImage'>
          {[1,2].map(()=> (
            <div className='imageSeries'>
              {repeat.map(() => (
                <div>
                  <Image
                    src="/assets/patternImage.jpg" // Path to your image in the 'public' directory
                    alt="My Image"
                    width={400} // Desired width of the image
                    height={400} // Desired height of the image
                  />
                </div>

              ))}
            </div>
          ))}
        </div>
        <div className='bigTitle'>
          <div className='up'>
            <p>Looking for something usefull ?</p>
            <div>
              <Link href={"/linksByCategory/0"}>
                <button>
                  Let's go !
                </button>
              </Link>

            </div>
          </div>
          <div className='down'>
            <p>Find and Share resources that are actually good, for all domains</p>
          </div>
          
        </div>
        <div className='blankRectangle'></div>
        <div className='categoryTiles' >
          <Link id='test1' href={"/linksByCategory/1"} onMouseEnter={() => handleMouseEnter("Learn")} onMouseLeave={() => handleMouseLeave()}>
            <div style={{backgroundColor:"rgb(162,0,255)"}} className='categoryTile'>
              <BiBrain color='white' />
            </div>
          </Link>
          <Link href={"/linksByCategory/2"} onMouseEnter={() => handleMouseEnter("Create")} onMouseLeave={() => handleMouseLeave()}>
            <div style={{backgroundColor:"rgb(255,0,94)"}} className='categoryTile'>
              <FaLightbulb color='white' />
            </div>
          </Link>
          <Link href={"/linksByCategory/3"} onMouseEnter={() => handleMouseEnter("Quick tools")} onMouseLeave={() => handleMouseLeave()}>
            <div style={{backgroundColor:"rgb(219,255,0)"}} className='categoryTile'>
              <AiFillTool color='rgb(45,50,69)'/>
            </div>
          </Link>
          <Link href={"/linksByCategory/4"} onMouseEnter={() => handleMouseEnter("Explore the web")} onMouseLeave={() => handleMouseLeave()}>
            <div style={{backgroundColor:"rgb(162,0,255)"}} className='categoryTile'>
              <BiSearch color='white' />
            </div>
          </Link>
          <Link href={"/linksByCategory/5"} onMouseEnter={() => handleMouseEnter("Data banks for free")} onMouseLeave={() => handleMouseLeave()}>
            <div style={{backgroundColor:"rgb(255,0,94)"}} className='categoryTile'>
              <BsFillDatabaseFill  color='white' />
            </div>
          </Link>
          <Link href={"/linksByCategory/6"} onMouseEnter={() => handleMouseEnter("Simulations")} onMouseLeave={() => handleMouseLeave()}>
            <div style={{backgroundColor:"rgb(219,255,0)"}} className='categoryTile'>
              <FaAtom  color='rgb(45,50,69)' />
            </div>
          </Link>
        </div>
        <div className='stickyNotificationContainer'>
          {/* <div className='stickyNotification'> sticky yes indeed</div> */}
          <StickyBar opacityValue={opacity} text={text}/>
        </div>
      </div>
      
      




    </main>
  )
}
