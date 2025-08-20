import Products from '@/widget/Products/Products'
import styles from './Promotions.module.scss'
import { IProduct } from '@/shared/type/product.interface'

export default function Promotions() {

    const products: IProduct[] = [
        {
            id: 1,
            type: "smartphone",
            name: "Samsung Galaxy S24 Ultra",
            price: 1299,
            discount: 10,
            count: 15,
            isFavorite: false,
            isAddedToCart: false,
        },
        {
            id: 2,
            type: "laptop",
            name: "Apple MacBook Pro 16\" M3 Pro",
            price: 2499,
            count: 8,
            isFavorite: true,
            isAddedToCart: false,
        },
        {
            id: 3,
            type: "headphones",
            name: "Sony WH-1000XM5",
            price: 399,
            discount: 5,
            count: 20,
            isFavorite: false,
            isAddedToCart: true,
        },
        {
            id: 4,
            type: "tablet",
            name: "iPad Pro 12.9\" (2024)",
            price: 1099,
            count: 12,
            isFavorite: false,
            isAddedToCart: false,
        },
        {
            id: 5,
            type: "smartphone",
            name: "Samsung Galaxy S24 Ultra",
            price: 1299,
            discount: 10,
            count: 15,
            isFavorite: false,
            isAddedToCart: false,
        },
        {
            id: 6,
            type: "laptop",
            name: "Apple MacBook Pro 16\" M3 Pro",
            price: 2499,
            count: 8,
            isFavorite: true,
            isAddedToCart: false,
        },
        {
            id: 7,
            type: "headphones",
            name: "Sony WH-1000XM5",
            price: 399,
            discount: 5,
            count: 20,
            isFavorite: false,
            isAddedToCart: true,
        },
        {
            id: 8,
            type: "tablet",
            name: "iPad Pro 12.9\" (2024)",
            price: 1099,
            count: 12,
            isFavorite: false,
            isAddedToCart: false,
        },
    ]


    return (
        <section className={styles.promotions}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <Products products={products} title='Акции' />
                </div>
            </div>
        </section>
    )
}