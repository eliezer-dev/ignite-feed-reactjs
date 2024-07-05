import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <aside></aside>
        <main>
        <Post
          author="Diego Fernandes"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
        />
         <Post
          author="Gabriel Buzzi"
          content="Um novo post muito legal"
        />
        </main>
      </div>

    
    </>
  )
}

export default App
