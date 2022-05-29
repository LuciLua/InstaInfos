// import axios from "axios"
// import Image from "next/image"
import axios from "axios"
import styles from "../styles/profile.module.scss"

interface PropsProfile {
    data: any
}

export async function getStaticProps(ctx: any) {


    const url = `https://graph.instagram.com/me/media?access_token=${process.env.MY_TOKEN}&fields=media_url`

    const resp = await axios.get(url)
    const data = await resp.data

    return {
        props: {
            data: data,
            // revalidate: 20
        }
    }
}

function Profile(props: PropsProfile) {

    // const following = props.data.graphql.user.edge_follow.count
    // const followers = props.data.graphql.user.edge_followed_by.count
    // const username = props.data.graphql.user.full_name

    // const profileImg = props.data.graphql.user.profile_pic_url_hd

    console.log(props.data)

    return (
        <div className={styles.profile}>
            <h1>Profile</h1>


            {/* <Image
            layout="fill"
            src={profileImg}/> */}
            {/* 
            <label htmlFor="username"> Username:
                <input id="username" type="text" disabled value={username} />
            </label>
            <label htmlFor="followers"> Followers:
                <input id="followers" type="text" disabled value={followers} />
            </label>
            <label htmlFor="following"> Following:
                <input id="following" type="text" disabled value={following} />
            </label> */}

        </div>
    )
}

export default Profile