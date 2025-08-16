import Products from '@/widget/Products/Products'
import styles from './Populars.module.scss'
import { IProduct } from '@/shared/type/product.interface'

export default function Populars() {

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
        // {
        //     id: 5,
        //     type: "smartwatch",
        //     name: "Garmin Fenix 7",
        //     price: 699,
        //     discount: 15,
        //     count: 10,
        //     isFavorite: true,
        //     isAddedToCart: true,
        // },
    ]


    return (
        <section className={styles.populars}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <Products products={products} title='Популярные товары' />
                </div>
            </div>
        </section>
    )
}