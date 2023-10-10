import Link from "next/link"
import style from "@/styles/customButton.module.css"

export default function CustomButton(color,string,link,width = 0){
    return(
        <>
            <Link href={link}>
                <div className={style.button}>
                    Visit website
                </div>
            </Link>
        </>

    )
}