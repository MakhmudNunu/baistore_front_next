'use client'

import { IProduct } from "@/shared/type/product.interface"
import Product from "./Product/Product"
import { useKeenSlider } from "keen-slider/react"
import { useState, useEffect } from "react"
import "keen-slider/keen-slider.min.css"
import styles from './Products.module.scss'

interface IProductsProps {
    products: IProduct[]
    title: string
}

export default function Products({ products, title }: IProductsProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesPerPage, setSlidesPerPage] = useState(4)

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: false,
        slides: { perView: 4, spacing: 24 },
        breakpoints: {
            '(max-width: 390px)': {
                slides: { perView: 2, spacing: 10 }
            }
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
    })

    // Динамически обновляем slidesPerPage в зависимости от ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerPage(window.innerWidth <= 390 ? 2 : 4)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const nextPage = () => {
        const nextIndex = currentSlide + slidesPerPage
        slider.current?.moveToIdx(Math.min(nextIndex, products.length - slidesPerPage))
    }

    const prevPage = () => {
        const prevIndex = currentSlide - slidesPerPage
        slider.current?.moveToIdx(Math.max(prevIndex, 0))
    }

    return (
        <div className={styles.products}>
            <h2>{title}</h2>
            <div className="keen-slider-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {products.map(item => (
                        <div key={item.id} className="keen-slider__slide">
                            <Product product={item} />
                        </div>
                    ))}
                </div>

                <div className={styles.paginationContainer}>
                    <div className={styles.pagination}>
                        <button onClick={prevPage} disabled={currentSlide === 0}></button>
                        <button
                            onClick={nextPage}
                            disabled={currentSlide + slidesPerPage >= products.length}
                        >

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
