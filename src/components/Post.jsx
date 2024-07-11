import styles from './Post.module.css'


export function Post() {
    return (
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/eliezer-dev.png"/>
                </div>
            </header>
       </article>
    )
    
}