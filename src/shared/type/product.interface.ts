export interface IProduct {
    image?: string 
    id: number
    type: string
    name: string
    price: number
    discount?: number
    count: number
    isFavorite: boolean
    isAddedToCart: boolean
}