import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./index.module.scss"

function justPost(props) {

    const [imgUrl, setImgUrl] = useState("/2.jpg")
    const [caption, setCaption] = useState("")
    useEffect( () => {
        const loc = window.location.search

        setCaption(loc.split("captions=")[1])
        setImgUrl(loc.split("img=")[1])
    })

        return (
            <>
            <div className={styles.img}>
                <h1>Just post</h1>
                <Image
                    src={imgUrl}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            
            <div className={styles.infos}>


                <p>Caption:</p>
                <p>{caption}</p>
            </div>
        </>
    )
}

export default justPost