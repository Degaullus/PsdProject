import styles from "./Navbar.module.css"

export default function Navbar() {

   
        return (
          <nav >
            <div className={styles.navBar} >
                <div> <img src="./Rabbit.png" alt="" className={styles.rabbit}/></div>
              <ul>
                <a className={styles.ati} href="#" >THE MAD HATTERS©</a>
              </ul>
              <ul><a className={styles.at} href="#home">HOME</a></ul>
              <ul><a className={styles.at} href="#about">ABOUT</a></ul>
              <ul> <a className={styles.at} href="#solution">SOLUTION</a></ul>
              <ul><a className={styles.at} href="#contact" >CONTACT US</a></ul>
            </div>
          </nav>
        );
      }
