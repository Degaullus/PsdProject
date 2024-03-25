import styles from "./Design.module.css";

export default function Design() {
  return (
    <div className={styles.background}>
        <div className={styles.white}>
            <div className={styles.left}>
                <div className={styles.titles}>
                <h1>DESIGN</h1>
                <h1 className={styles.undertitle}>INNOVATIONS</h1>
                </div>
                <img className={styles.dotimage} src="public/Schwarz.PNG" alt="" />
                <p>Quality digital product and platforms require in depth study and research. With thes, th ecompany release some deeep shit 3D stuff. Innovatov and appriorate, of project and solutions to orduces outputs in your life that the achiee to producte outsanding necessary goals of the designs. Collaborate, create and innovate with te mad Hatter.</p>
            </div>
            <div className={styles.midd}>
                <img src="public/Design.PNG" alt="" />
            </div>
            <div className={styles.right}>
                <div className={styles.titles}>
                <h1>CREATIVE</h1>
                <h1 className={styles.undertitle} >SOLUTIONS</h1>
                </div>
                <img className={styles.dotimage} src="public/Schwarz.PNG" alt="" />
                <p>Quality digital product and platforms require in depth study and research. With thes, th ecompany release some deeep shit 3D stuff. Innovatov and appriorate, of project and solutions to orduces outputs in your life that the achiee to producte outsanding necessary goals of the designs. Collaborate, create and innovate with the mad Hatter.</p>
            </div>
            <div className={styles.arrow}>
                <img src="public/Arrow.PNG" alt="" />
            </div>

        </div>
      
    </div>
  );
}
