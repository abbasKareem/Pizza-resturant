import Image from "next/image"
import styles from "../../styles/Order.module.css"

const Order = () => {
  const status = 0

  const statusClass = (index) => {
    if (index - status < 1) return styles.done
    if (index - status === 1) return styles.inProgress
    if (index - status > 1) return styles.unDone
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>3939393</span>
              </td>
              <td>
                <span className={styles.name}>abbas kareem</span>
              </td>
              <td>
                <span className={styles.address}>
                  karbal, center, main street
                </span>
              </td>

              <td>
                <span className={styles.total}>$42.34</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              className={styles.checkedIcon}
              src="/img/paid.png"
              width="30"
              height="30"
              alt="paid"
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width="20" height="20" alt="paid" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              className={styles.checkedIcon}
              src="/img/bake.png"
              width="30"
              height="30"
              alt="paid"
            />
            <span>preparing</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width="20" height="20" alt="paid" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              className={styles.checkedIcon}
              src="/img/bike.png"
              width="30"
              height="30"
              alt="paid"
            />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width="20"
                height="20"
                alt="paid"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width="30" height="30" alt="paid" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width="20"
                height="20"
                alt="paid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Dsicount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
