import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH, YES, WE DID IT. ABBAS PIZZA WELL BAKED SLICE OF PIZZA.!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>Karbala. main street</p>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Baghdad, 596844
            <br /> (+780) 855-5483
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Baghdad, 596844
            <br /> (+780) 855-5483
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Baghdad, 596844
            <br /> (+780) 855-5483
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
