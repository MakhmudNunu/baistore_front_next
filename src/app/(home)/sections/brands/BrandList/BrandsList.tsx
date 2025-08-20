import styles from './BrandsList.module.scss'
import BrandItem from "./BrandItem/BrandItem"
import { IBrand } from "@/shared/type/brand.interface"
import axios from "axios"

export const dynamic = "force-static"

async function getBrands(): Promise<IBrand[]> {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    try {
        const res = await axios.get<IBrand[]>(`${API_URL}/api/brands/all`, {})

        return res.data
    } catch (error) {
        console.error(error)
        throw new Error("Не удалось загрузить бренды")
    }
}

export default async function BrandsPage() {
    const brands = await getBrands()

    return (
        <div className={styles.brandsList}>
            {brands
                .slice(0, 6)
                .map((brand: IBrand) => (
                    <BrandItem brand={brand} key={brand.id} />
                ))}
        </div>
    )
}
