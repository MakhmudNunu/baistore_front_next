import Image from "next/image"
import styles from './brands.module.scss'

export const revalidate = 60 // ISR каждые 60 секунд

export default async function BrandsPage() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${API_URL}/api/brands/all`, {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error("Не удалось загрузить бренды")
    }

    const brands = await res.json()

    console.log(brands)

    return (
        <section className={styles.brands}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h3>Бренды</h3>
                    <div className={styles.brandsList}>
                        {brands.filter((item: any, index: number) => index <= 5).map((brand: any) => (
                            <div key={brand.id} className={styles.brandCard}>
                                <div className={styles.brandImage}>
                                    <Image src={'/assets/brandShablon.svg'} fill alt="brandImage" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}
