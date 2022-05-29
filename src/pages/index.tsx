import axios from "axios"
import Posts from "../components/Posts"
import styles from "../styles/main.module.scss"


interface PropsHome {
    likes: string,
    comments: string,
    data: any
}

export async function getStaticProps(ctx) {
    const likes = 10
    const comments = 20

    const url = `https://graph.instagram.com/me/media?access_token=${process.env.MY_TOKEN}&fields=media_url,media_type,caption,media_link,permalink`

    const resp = await axios.get(url)
    const data = await resp.data


    return {
        props: {
            likes,
            comments,
            data,
            revalidate: 20
        }
    }
}

function Home(props: PropsHome) {

    return (
        <main className={styles.main}>
            {
                props.data.data.map(p => {
                    return (
                        <div key={p.id}>
                            <a href={`/posts/${p.id}?captions=${p.caption}?img=${p.media_url}`}>
                                <Posts urlImg={p.media_url} likes={props.likes} comments={props.comments} />
                            </a>
                        </div>
                    )
                })
            }

        </main>
    )
}

export default Home