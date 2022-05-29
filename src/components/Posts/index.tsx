import Image from "next/image"
import styles from "./index.module.scss"


interface PropsPosts{
    likes: string,
    comments: string,
    urlImg: string
}

function Posts(props: PropsPosts) {
    return (
        <>
            <div className={styles.posts}>
            <div className={styles.img}>
                <Image 
                src={props.urlImg} 
                alt="" 
                layout="fill"
                />
            </div>
                <div className={styles.info}>
                    <div className={styles.likes}>
                        Likes: 
                        <span>{props.likes}</span>
                    </div>
                    <div className={styles.comments}>
                        Comments:
                        <span>{props.comments}</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Posts