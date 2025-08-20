import BrandsList from './BrandList/BrandsList'
import styles from './brands.module.scss'

export default async function BrandsPage() {

    return (
        <section className={styles.brands}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h3>Бренды</h3>
                    <BrandsList />
                </div>
            </div>
        </section >
    )
}
