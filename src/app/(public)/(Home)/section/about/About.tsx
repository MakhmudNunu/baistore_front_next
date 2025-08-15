import React from "react";
import styles from "./about.module.scss";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.block}>
                        <h1 className={styles.title}>ВАISTORE</h1>
                        <div className={styles.address}>
                            <p>Барклая 8, Старая горбушка</p>
                            <p>+7 977 371-88-80</p>
                        </div>
                        <button className={styles.button}>Обратная связь</button>
                    </div>
                    <div className={styles.infoCard}>
                        <h3 className={styles.title}>О нас:</h3>
                        <p className={styles.text}>
                            Наша техника варит кофе, гладит рубашки, готовит вкусный ужин и делает уборку за вас.
                            А вместе с этим — вы найдёте у нас пледы, подушки, посуду и ещё много приятных мелочей.
                            Тысячи довольных клиентов уже выбрали нас за надёжность, выгодные цены и тёплый сервис.
                            Попробуйте и вы — делаем ваш быт проще и приятнее каждый день!
                        </p>
                        <span className={styles.showMore}>Показать полностью ⌄</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
