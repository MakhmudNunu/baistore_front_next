import { IProduct } from "@/shared/type/product.interface";
import Product from "./Product/Product";

import styles from './Products.module.scss'

interface IProductsProps {
    products: IProduct[]
    title: string
}

export default function Products({ products, title }: IProductsProps) {
    return (
        <div className={styles.products}>
            <h2>{title}</h2>
            <div className={styles.productsList}>
                {
                    products.map(item => {
                        return (
                            <Product key={item.id} product={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}