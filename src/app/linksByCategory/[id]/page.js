import React from 'react';
import getLink from '@/app/functions/getLink'
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import style from '@/styles/linklist.module.css'
// just to be clear, the id here refers to the category's id and not the link ID
export default async function LinkList({params:{id}}){
    const backColorWheel = {1:"rgb(162,0,255)",2:"rgb(255,0,94)",3:"rgb(219,255,0)"}
    const colorWheel = {1:"white",2:"white",3:"rgb(30,48,80)"}
    const data = await getLink()
    if(id!=0){
        return(
            <div className={style.linksContainer}>
                <NavBar/>
                {data.ressources.map(item => (item.categoryId._id == id && <Link href={`/linkpage/${item._id}`} ><div style={{backgroundColor:item.categoryId.bgColor, color:item.categoryId.color}} className={style.linkElement} key={item.id}>{item.title}</div></Link> ))}
            </div>
        )        
    }
    else{
        return(
            <div>
                <NavBar/>
                <div className={style.linksContainer}>{data.map(item => (<Link  href={`/linkpage/${item.id}`} ><div style={{backgroundColor:backColorWheel[(item.categoryId-1) % 3+1], color:colorWheel[(item.categoryId-1) % 3+1]}}  className={style.linkElement} key={item.id}>{item.title}</div></Link> ))}</div>     
            </div>
        )               
    }



}

