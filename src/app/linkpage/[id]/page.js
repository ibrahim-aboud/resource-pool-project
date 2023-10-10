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
      <div style={{backgroundColor:backColorWheel[(data.categoryId-1) % 3 +1] , color:colorWheel[(data.categoryId-1) % 3+1]}} className={style.content}>
        <div className={style.title}>{data.title}</div>
        <div className={style.description}>{data.description}</div>
      </div>
      <div className={style.buttonContainer}>
        <Link href={data.link} target="_blank">
          <div style={{backgroundColor:backColorWheel[(data.categoryId) % 3 +1] , color:colorWheel[(data.categoryId) % 3+1]}} className={style.button}>
            Visit website
          </div>
        </Link>
      </div>
      <div className={style.buttonContainer}>
        <Link href={`/linksByCategory/${data.categoryId}`}>
          <div style={{backgroundColor:backColorWheel[(data.categoryId+1) % 3 +1] , color:colorWheel[(data.categoryId+1) % 3+1]}} className={style.button}>
            Explore more
          </div>
        </Link>
      </div>

    </div>
  )
}