import React from "react";
import style from "../styles/NavBar.module.css"
import Link from "next/link";
function NavBar(){
    return(
        <div className={style.rectangle} id="nav"> 
            <Link className={style.link} href={"/"}>Ressource Pool</Link>
        </div>
    )
}

export default NavBar;