import { IProduct } from "@/shared/type/product.interface";

import styles from './Product.module.scss'
import AddToCart from "@/features/cart/addToCart/ui/AddToCart";
import AddToFavorite from "@/features/favorite/addToFavorite/ui/AddToFavorite";

interface IProductProps {
    product: IProduct
}

export default function Product({ product }: IProductProps) {

    const discountedPrice = product.discount
        ? Math.round(product.price * (1 - product.discount / 100))
        : product.price

    return (
        <div className={styles.product}>
            {/* <Image /> */}
            <div className={styles.imageContainer}>
                <div className={styles.image}></div>
                {
                    product.discount ? (
                        <h5>Акция</h5>
                    ) :
                        null
                }
            </div>
            <h4 className={styles.type}>{product.type}</h4>
            <p className={styles.name}>{product.name}</p>
            <div className={styles.priceAndCount}>
                {
                    product.count >= 1 ? (
                        <p className={styles.count}>
                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3.38745" r="3" fill="#70FF63" />
                            </svg>
                            В наличии
                        </p>
                    ) : (
                        <p className={styles.count}>
                            <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3.38745" r="3" fill="#ef0101ff" />
                            </svg>
                            Нет в наличии
                        </p>
                    )
                }
                <div className={styles.priceContainer}>
                    {product.discount ? (
                        <>
                            <p className={styles.oldPrice}>{product.price} ₽</p>
                            <p className={styles.newPrice}>{discountedPrice} ₽</p>
                        </>
                    ) : (
                        <p className={styles.price}>{product.price} ₽</p>
                    )}
                </div>
            </div>
            <div className={styles.buttons}>
                <AddToFavorite />
                <AddToCart />
            </div>
        </div>
    )
}