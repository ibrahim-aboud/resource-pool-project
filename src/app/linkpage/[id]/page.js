import React from 'react';
import NavBar from '@/components/NavBar';
import getLink from '@/app/functions/getLink'
import style from '@/styles/linkpage.module.css'
import Link from 'next/link';


export default async function Page({params:{id}}) {
  const data = await getLink(id)
  const backColorWheel = {1:"rgb(162,0,255)",2:"rgb(255,0,94)",3:"rgb(219,255,0)"}
  const colorWheel = {1:"white",2:"white",3:"rgb(30,48,80)"}
  return (
    <div className={style.main}>
      <NavBar/>
      <div style={{backgroundColor:data.ressource.categoryId.bgColor , color:data.ressource.categoryId.color}} className={style.content}>
        <div className={style.title}>{data.ressource.title}</div>
        <div className={style.description}>{data.ressource.description}</div>
      </div>
      <div className={style.buttonContainer}>
        <Link href={data.ressource.link} target="_blank">
          <div style={{backgroundColor:data.ressource.categoryId.bgColor , color:data.ressource.categoryId.color}} className={style.button}>
            Visit website
          </div>
        </Link>
      </div>
      <div className={style.buttonContainer}>
        <Link href={`/linksByCategory/${data.ressource.categoryId._id}`}>
          <div style={{backgroundColor:data.ressource.categoryId.bgColor , color:data.ressource.categoryId.color}} className={style.button}>
            Explore more
          </div>
        </Link>
      </div>

    </div>
  )
}