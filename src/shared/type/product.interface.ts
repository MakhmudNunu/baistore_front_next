export interface IProduct {
    id: number
    type: string
    name: string
    price: number
    discount?: number
    count: number
    isFavorite: boolean
    isAddedToCart: boolean
}