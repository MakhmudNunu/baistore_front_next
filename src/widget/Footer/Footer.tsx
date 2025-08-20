import React from "react";
import styles from "./footer.module.scss";
import Logo from "@/shared/ui/Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.block}>
            <Logo color={"white"} />
            <div className={styles.address}>
              <p>Барклая 8, Старая горбушка</p>
              <p>+7 977 371-88-80</p>
            </div>
            <button className={styles.button}>Обратная связь</button>
          </div>
          <div className={styles.menuBlock}>
            <h3>Каталог</h3>
            <ul>
              <li>Смартфоны</li>
              <li>Планшеты</li>
              <li>Умные часы</li>
              <li>Наушники</li>
              <li>Игры и консоли</li>
              <li>Портативная акустика</li>
              <li>Умный дом</li>
              <li>Чехлы и защита</li>
              <li>Ремешки</li>
              <li>Клавиатуры, мышки, стилусы</li>
              <li>Накопители</li>
              <li>Держатели для устройств</li>
              <li>Поисковые трекеры</li>
              <li>Apple</li>
              <li>Mac</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>iPad</li>
              <li>Airpods</li>
              <li>Аксессуары Apple</li>
            </ul>
          </div>

          <div className={styles.menuBlockRight}>
            <h3>Профиль</h3>
            <ul>
              <li>Избранное</li>
              <li>Корзина</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
