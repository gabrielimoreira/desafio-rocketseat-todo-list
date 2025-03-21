import { Header } from './components/Header'
import { Button } from './components/Button'

import './global.css'
import styles from './App.module.css'
import { Input } from './components/Input'


export function App() {
  return (
      <main>
        <Header/>

        <section className={styles.taskContainer}>
          <div className={styles.newTaskContainer}>
            <Input />
            <Button />
          </div>
        </section>
      </main>
  )
}