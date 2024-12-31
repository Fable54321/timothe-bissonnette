import { Outlet } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import styles from './Home.module.css'


const Home = () => {
  return (
    <>
      <NavBar />
      <main className={styles['center-content']}>
        <div className={styles['center-content__decorative-banner']} ></div>
        <Outlet />
      </main>  
    </>  
  )
}

export default Home
