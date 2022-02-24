import Image from "next/image"
import styles from "../styles/PizzaCart.module.css"

const PizzaCart = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza2.jpg" alt="pizza" width="500" height="500" />
      <h1 className={styles.title}>FIORI DE ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolor
      </p>
    </div>
  )
}

export default PizzaCart
