import { IBrand } from "@/shared/type/brand.interface"
import Image from "next/image"

import styles from './BrandItem.module.scss'

interface IBrandProps {
    brand: IBrand
}

export default function BrandItem({ brand }: IBrandProps) {
    return (
        <div className={styles.brandCard}>
            <div className={styles.brandImage}>
                <Image src={'/assets/brandShablon.svg'} fill alt={brand.name} />
                {/* <Image
                                    src={brand.brandImage.image.url}
                                    fill
                                    alt="brandImage"
                                /> */}

            </div>
        </div>
    )
}