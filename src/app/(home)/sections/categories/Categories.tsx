import Image from "next/image"
import styles from './categories.module.scss'

export const revalidate = 1000

export default async function CategoriesPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${API_URL}/api/categories/all`, {
        next: { revalidate: 1000 },
    })

    if (!res.ok) {
        throw new Error("Не удалось загрузить категории")
    }

    const categories = await res.json()

    console.log(categories)

    return (
        <section className={styles.categories}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h3>Популярные категории</h3>
                    <div className={styles.categoriesList}>
                        {categories.filter((item: any, index: number) => index <= 2).map((category: any) => (
                            <div key={category.id} className={styles.categoryCard}>
                                <div className={styles.categoryImageContainer}>
                                    <div className={styles.categoryImage}>
                                        <Image src={'/assets/categoryShablon.svg'} fill alt="categoryImage" />
                                    </div>
                                </div>
                                <h4>
                                    {category.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}
