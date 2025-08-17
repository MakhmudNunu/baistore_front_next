import styles from './categorysettings.module.scss'
export default function CategorySettings() {
    return (
        <section className={styles.category}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.input}>
                        <h4>Название</h4>
                        <input type="text" placeholder='Название категории' />
                    </div>
                    <div className={styles.input}>
                        <h4>Фото</h4>
                        <input type="file" />
                    </div>
                    <div className={styles.input}>
                        <h4>Иконки</h4>
                        <input type="file" />
                    </div>
                    <div className={styles.buttons}>
                        <button>Отменить</button>
                        <button className={styles.blue}>Создать</button>
                    </div>
                </div>
            </div>
        </section>
    )
}