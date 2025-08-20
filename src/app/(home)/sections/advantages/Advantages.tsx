import Image from 'next/image'
import styles from './advantages.module.scss'

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={`container ${styles.container}`}>
        <h2>Наши преимущества</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={'/assets/home-appliances-png-282511.svg'} fill alt='' />
            </div>
            <h3>Бытовая техника</h3>
            <p>Бесплатная доставка при заказе <br /> от 5 000 ₽</p>
            <button className={styles.button}>Сделать заказ</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={'/assets/pillow.png'} fill alt='' />
            </div>
            <h3>От чайника <br /> до подушки</h3>
            <p>Всё в одном месте</p>
            <button className={styles.button}>Сделать заказ</button>
          </div>
        </div>
      </div>
    </section>
  )
}