import styles from "./category.module.scss";

export default function CategoryForm() {
    return (
        <section className={styles.category}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Управление категориями</h2>
                    <div className={styles.categories}>
                        <div className={styles.search}>
                            <input className={styles.category__form} type="search" placeholder="Поиск" />                        
                            <div className={styles.category__form}>Категория</div>
                            <div className={styles.category__form}>Подкатегория</div>
                        </div>
                        <div className={styles.category__form}>Добавить категорию +</div>
                    </div>
                    <div className={styles.category__reduct}>
                        <div className={styles.category__title}>
                            <h4>Название</h4>
                            <div><h4>Избранное</h4><h4>Фото</h4></div>
                            <div></div>
                        </div>
                        <div className={styles.category__smartphone}>
                            <h4>Смартфоны и планшеты</h4>
                            <div>img1.jpg</div>
                            <div></div>
                        </div>
                        <div className={styles.category__smartphone}>
                            <h4>Смартфоны и планшеты</h4>
                            <div>img1.jpg</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
