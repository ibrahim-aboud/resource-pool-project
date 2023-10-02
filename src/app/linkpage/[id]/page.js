import React from 'react';
import NavBar from '@/components/NavBar';
import getLink from '@/app/functions/getLink'
import style from '@/styles/linkpage.module.css'
import Link from 'next/link';


export default async function Page({params:{id}}) {
  const data = await getLink(id)
  return (
    <div className={style.main}>
      <NavBar/>
      <div className={style.content}>
        <div className={style.title}>{data.title}</div>
        <div className={style.description}>{data.description}</div>
      </div>
      <div className={style.buttonContainer}>
        <Link href={data.link}>
          <div className={style.button}>
            Visit website
          </div>
        </Link>
      </div>
      <div className={style.buttonContainer}>
        <Link href="/">
          <div className={style.button1}>
            Explore more
          </div>
        </Link>
      </div>

    </div>
  )
}