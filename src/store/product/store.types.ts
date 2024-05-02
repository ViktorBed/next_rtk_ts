export interface Root {
    data: Damn[]
    count: number
}

export interface Damn {
    id: number
    name: string
    question: string
    asins: string[]
    listingResults: ListingResult[]
    path: string
    templateId: number
    updatedAt: string
    createdAt: string
}

export interface ListingResult {
    info: Info
    images: Image[]
    option: string
}

export interface Info {
    price: string
    title: string
    aboutItem: string[]
    brandName: string
    listPrice: string
    reviewCount: string
    reviewRating: string
    saleRed?: string
}

export interface Image {
    src: string
    option: string
}


export type placeholder = place[]

export interface place {
    userId: number
    id: number
    title: string
    body: string
}
