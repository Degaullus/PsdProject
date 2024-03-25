import styles from "./Collaborations.module.css";

export default function Collaborations() {
  return (
    <div className={styles.background}>
      <div className={styles.megaContainer}>
        <h1 className={styles.header}>Collaborations</h1>

        <div className={`${styles.container} ${styles.containerLeft}`}>
          <div className={styles.textContainer}>
            <div className={styles.containerHeader}>
              <p className={styles.text1}>01</p>
              <p className={styles.text2}>DESIGN PROJECT</p>
            </div>
            <p className={styles.kreise}>o o</p>
            <p className={styles.text3}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores repellat excepturi placeat, rem labore quae tempora
              saepe culpa accusantium porro assumenda dolor. Ad cum aliquid quia
              iusto labore! Soluta, eos. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <img src="../public/Collaborations1.png" alt="" />
        </div>
        <div className={`${styles.container} ${styles.containerRight}`}>
          <div className={styles.textContainer}>
            <div className={styles.containerHeader}>
              <p className={styles.text1}>02</p>
              <p className={styles.text2}>DESIGN PROJECT</p>
            </div>
            <p className={styles.kreise}>o o</p>
            <p className={styles.text3}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores repellat excepturi placeat, rem labore quae tempora
              saepe culpa accusantium porro assumenda dolor. Ad cum aliquid quia
              iusto labore! Soluta, eos. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <img src="../public/Collaborations2.png" alt="" />
        </div>
        <div className={`${styles.container}`}>
          <div className={styles.textContainer}>
            <div className={styles.containerHeader}>
              <p className={styles.text1}>03</p>
              <p className={styles.text2}>DESIGN PROJECT</p>
            </div>
            <p className={styles.kreise}>o o</p>
            <p className={styles.text3}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores repellat excepturi placeat, rem labore quae tempora
              saepe culpa accusantium porro assumenda dolor. Ad cum aliquid quia
              iusto labore! Soluta, eos. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <img src="../public/Collaborations3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
