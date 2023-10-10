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

export default function Tiles(){
    return(
        <div>
            <div className='categoryTiles' >
            <Link id='test1' href={"https://www.google.com"}>
                <div style={{backgroundColor:"rgb(162,0,255)"}} className='categoryTile' onMouseEnter={() => handleMouseEnter("hello !")} onMouseLeave={() => handleMouseLeave()}>
                <BiBrain color='white' />
                </div>
            </Link>
            <Link href={"https://www.google.com"}>
                <div style={{backgroundColor:"rgb(255,0,94)"}} className='categoryTile'>
                <FaLightbulb color='white' />
                </div>
            </Link>
            <Link href={"https://www.google.com"}>
                <div style={{backgroundColor:"rgb(219,255,0)"}} className='categoryTile'>
                <AiFillTool color='rgb(45,50,69)'/>
                </div>
            </Link>
            <Link href={"https://www.google.com"}>
                <div style={{backgroundColor:"rgb(255,0,94)"}} className='categoryTile'>
                <BiSearch color='white' />
                </div>
            </Link>
            <Link href={"https://www.google.com"}>
                <div style={{backgroundColor:"rgb(219,255,0)"}} className='categoryTile'>
                <BsFillDatabaseFill  color='rgb(45,50,69)' />
                </div>
            </Link>
            <Link href={"https://www.google.com"}>
                <div style={{backgroundColor:"rgb(162,0,255)"}} className='categoryTile'>
                <FaAtom  color='white' />
                </div>
            </Link>
            </div>
            <div className='stickyNotificationContainer'>
            {/* <div className='stickyNotification'> sticky yes indeed</div> */}
            <StickyBar opacityValue={opacity} text={text}/>
            </div>
        </div>

    )
}