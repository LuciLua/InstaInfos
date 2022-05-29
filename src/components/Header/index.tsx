import styles from "./index.module.scss"

function Header(){
    return(
        <>
        <header className={styles.header}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </header>
        </>
    )
}


export default Header