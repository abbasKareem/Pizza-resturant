import { useState } from "react"
import Image from "next/image"
import styles from "../styles/Featured.module.css"
const Featured = () => {
  const [index, setIndex] = useState(0)
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ]

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }

  console.log(index)

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrowl"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={img} alt="featured" layout="fill" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrowr"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Featured
