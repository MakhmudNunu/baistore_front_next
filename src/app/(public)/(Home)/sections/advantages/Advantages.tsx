import styles from './advantages.module.scss'

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Бытовая техника</h3>
            <p>Бесплатная доставка при заказе от 5 000 ₽</p>
            <button className={styles.button}>Сделать заказ</button>
          </div>
          <div className={styles.card}>
            <h3>От чайника до подушки</h3>
            <p>Всё в одном месте</p>
            <button className={styles.button}>Сделать заказ</button>
          </div>
        </div>
      </div>
    </section>
  )
}