import { IBrand } from '@/shared/type/brand.interface'
import styles from './Brand.module.scss'

export default async function Brands() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${API_URL}/api/brands/all`)

    if (!res.ok) {
        throw new Error("Не удалось загрузить бренды")
    }

    const brands = await res.json()

    console.log(brands)

    return (
        <div className={styles.brands}>
            <h2>Брэнды</h2>
            <ul>
                {
                    brands.map((item: IBrand) => {
                        return (
                            <li key={item.name}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}