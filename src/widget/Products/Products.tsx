import { IProduct } from "@/shared/type/product.interface";
import Product from "./Product/Product";

interface IProductsProps {
    products: IProduct[]
    title: string
}

export default function Products({products, title}: IProductsProps) {
    return (
        <div>
            <h2>{title}</h2>
            {
                products.map(item => {
                    return (
                        <Product key={item.id} product={item} />
                    )
                })
            }
        </div>
    )
}