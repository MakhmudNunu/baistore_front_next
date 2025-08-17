import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {/* <div className={styles.image}>

          </div> */}
          <div className={styles.imageContainer}>
            <Image
              src={'/assets/AlicePortative.jpeg'}
              alt='image'
              fill
              style={{
                borderRadius: 30
              }}
            />
            <div className={styles.info}>
              <div className={styles.aliceLogo}>
                <Image
                  src={'/assets/Alisa_Yandex.svg.png'}
                  fill
                  alt=''
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div className={styles.text}>
                <h1>Первая портативная <br /> Яндекс Станция Стрит</h1>
                <h3>Уже в продаже</h3>
                <p>Первая портативная станция <br /> в линейке умных колонок от Яндекс</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
