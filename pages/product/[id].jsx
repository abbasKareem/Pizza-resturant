import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/Product.module.css"

const Product = () => {
  const [size, setSize] = useState(0)
  const pizza = {
    id: 1,
    img: "/img/pizza2.jpg",
    name: "CAMPAGNOLA",
    price: [18.5, 23.5, 27.9],
    desc: "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt={pizza.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="size" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose additional ingredtion</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.qunatity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
