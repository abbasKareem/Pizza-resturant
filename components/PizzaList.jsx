import styles from "../styles/PizzaList.module.css"
import PizzaCart from "./PizzaCart"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div className={styles.wrapper}>
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
      </div>
    </div>
  )
}

export default PizzaList
