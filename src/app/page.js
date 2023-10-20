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
import { useEffect, useState } from 'react'
import React from 'react'


export default function Home() {
  const handleMouseEnter = (text) => {
    setText(text)
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  const [categories,setcategories] = useState([])
  const [opacity,setOpacity] = useState(0)
  const [text,setText]=useState("dummy text")
  var repeat = [1,2,3,4,5,6]
  const fetchCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories")
    const data = await res.json()
    setcategories(data.categories);
  }

  useEffect(()=>{
    fetchCategories();
  },[])

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
          {categories && categories.map((item) => (
            <Link href={`/linksByCategory/${item._id}`} onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={() => handleMouseLeave()}>
              <div style={{backgroundColor:item.bgColor}} className='categoryTile'>
                <img src={item.imagePath} alt={item.title} style={{width:"1em",height:"1em"}}/>
              </div>
            </Link>
          ))}
          {!categories && <div>loading</div>}

          
        </div>
        <div className='stickyNotificationContainer'>
          {/* <div className='stickyNotification'> sticky yes indeed</div> */}
          <StickyBar opacityValue={opacity} text={text}/>
        </div>
      </div>
      
      




    </main>
  )
}
