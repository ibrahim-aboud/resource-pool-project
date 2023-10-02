import React from 'react';
import getLink from '@/app/functions/getLink'
import NavBar from '@/components/NavBar';
// just to be clear, the id here refers to the category's id and not the link ID
export default async function LinkList({params:{id}}){
    const colorWheel = {1:"rgb(162,0,255)",2:"rgb(255,0,94)",3:"rgb(219,255,0)"}
    const data = await getLink()
    if(id!=0){
        return(
            <>
                <NavBar/>
                {data.map(item => (item.categoryId == id && <div color='black' key={item.id}>{item.title}</div> ))}
            </>
        )        
    }
    else{
        return(
            <>
                <NavBar/>
                {data.map(item => (<div color='black' key={item.id}>{item.title}</div> ))}
            </>
        )               
    }



}

