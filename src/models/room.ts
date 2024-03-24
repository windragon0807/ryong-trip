export interface Room {
  avaliableCount: number
  basicInfo: {
    [key: string]: string
    // bed: string
    // maxOccupancy: number
    // smoke?: string
    // squareMeters: string
  }
  imageUrl: string
  price: number
  refundable: boolean
  roomName: string
}
