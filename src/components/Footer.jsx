import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.background}>
        <div className={styles.footer}>
        
    
             <div className={styles.upper}>
                <div className={styles.left}>
                    <h2 className={styles.title}>THE COMPANY</h2>
                    <p>New designs</p>
                    <p>Weekly Insights</p>
                    <p>Collaborations</p>
                </div>
                <div className={styles.left}>
                    <h2 className={styles.title}>THE TEAM</h2>
                    <p>Meet the Team</p>
                    <p>OUr designers</p>
                    <p>The Principal Shit</p>
                </div>
                <div className={styles.left}>
                    <h2 className={styles.title} >OUR DESIGNS</h2>
                    <p>Intentionnal ressources</p>
                    <p>Digital Solutions</p>
                    <p>Legal</p>
                </div>
                <div className={styles.left}>
                    <h2 className={styles.title}>LEGAL SHIT</h2>
                    <p>Meet the Team</p>
                    <p>OUr designers</p>
                    <p>The Principal Shit</p>
                </div>

             </div>
             <div className={styles.downer}>
          
                  <p><i>Copyright 2024 Fashion with All Right Reserved by WARHAMMER</i></p>
             </div>

      
        </div>
     
    </div>
  );
}
