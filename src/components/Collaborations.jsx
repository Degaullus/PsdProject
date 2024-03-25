import styles from "./Collaborations.module.css";

export default function Collaborations() {
  return (
    <div className={styles.background}>
      <div className="megaContainer">
        <h1 className={styles.header}>Collaborations</h1>

        <div className={styles.container01}>
          <p className="text1">01</p>
          <p className="text2">DESIGN PROJECT</p>
          <p className="kreise">o o</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            repellat excepturi placeat, rem labore quae tempora saepe culpa
            accusantium porro assumenda dolor. Ad cum aliquid quia iusto labore!
            Soluta, eos. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Accusamus ad, deleniti veritatis, consequatur, est totam amet
            voluptates vitae perspiciatis consequuntur perferendis dolor
            voluptatum delectus quam? Officiis voluptates dolorem soluta
            repellat.
          </p>
          <img src="../public/Collaborations1.png" alt="" />
        </div>
        <div className={styles.container02}></div>
        <div className={styles.container03}></div>
      </div>
    </div>
  );
}
