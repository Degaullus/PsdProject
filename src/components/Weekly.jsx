import styles from "./Weekly.module.css";

export default function Weekly() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.weekly}>
          <h1 className={styles.weeklyTitle}>WEEKLY</h1>
          <h1 className={styles.weeklyTitle2}>INSIGHTS</h1>
        </div>
        <div className={styles.subContainer}>
          <p className={styles.dot2}>OO</p>
          {/*     <img className={styles.dot} src="public/Weiß-groß.PNG" alt="" /> */}

          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <img className={styles.frau} src="public/Frau.PNG" alt="" />
        </div>
      </div>
    </div>
  );
}
