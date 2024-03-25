import styles from "./Navbar.module.css"

export default function Navbar() {

   
        return (
          <nav >
            <div className={styles.navBar} >

              <ul>
                <li>              
                    <a href="#" >The Mad Hatter</a></li>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li >
                  <a href="#about">About</a>
                </li>
                <li >
                  <a href="#solution">Solution</a>
                </li>
                <li >
                  <a href="#contact" >Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        );
      }
